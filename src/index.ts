/**
 * @file Xuper SDK
 * Created by xinyi on 2019/12/19
 */

import BN from 'bn.js';
import sha256 from 'sha256';
import {ec as EC} from 'elliptic';
import Account from './account';
import {
    Language, Strength, Cryptography, VERSION
} from './constants';
import {jsonEncode} from './utils';
import {
    XuperSDKInterface, AccountModel, XuperOptions, PrivateKeyModel,
    PublicKeyModel, ContracRequesttModel
} from './interfaces';

export {Language, Strength, Cryptography} from './constants';

export default class XuperSDK implements XuperSDKInterface {
    accountIns: Account;

    accountModel?: AccountModel;

    options: XuperOptions;

    static instance: XuperSDK;

    public static getInstance(opts: XuperOptions): XuperSDK {
        if (!this.instance) {
            this.instance = new this(opts);
        }
        return this.instance;
    }

    constructor(opts: XuperOptions) {
        this.options = {...opts};
        this.accountIns = new Account();
    }

    /**
     * Create new account
     * @param language
     * @param strength - easy: 12, middle: 16，hard: 24
     * @param cryptography - EccFIPS
     */
    createAccount(language: Language, strength: Strength, cryptography: Cryptography): AccountModel {
        const model = this.accountIns.create(language, strength, cryptography);
        this.accountModel = model;
        return model;
    }

    /**
     * Revert account with mnemonic
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revertAccount(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel {
        const model = this.accountIns.revert(mnemonic, language, cryptography);
        this.accountModel = model;
        return model;
    }

    /**
     * Check address valid
     * @param address
     */
    checkAddress(address: string): boolean {
        return this.accountIns.checkAddress(address);
    }

    /**
     * Check mnemonic valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean {
        return this.accountIns.checkMnemonic(mnemonic, language);
    }

    /**
     * Local account balance or target address
     * @param address
     */
    getBalance(address?: string): Promise<any> {
        if (!address && !this.accountModel) {
            throw 'No account information or target address';
        }

        return fetch(`${this.options.node}/v1/get_balance`, {
            method: 'POST',
            body: JSON.stringify({
                address: address || this.accountModel!.address,
                bcs: [{
                    bcname: this.options.chain
                }]
            })
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    /**
     * Local account balance detail or target address detail
     * @param address
     */
    getBalanceDetail(address?: string): Promise<any> {
        if (!address && !this.accountModel) {
            throw 'No account information or target address';
        }

        return fetch(`${this.options.node}/v1/get_balance_detail`, {
            method: 'POST',
            body: JSON.stringify({
                address: address || this.accountModel!.address,
                tfds: [{
                    bcname: this.options.chain
                }]
            })
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    /**
     * Pre-execution transaction with utxos
     * @param toAddress
     * @param amount
     * @param fee
     */
    preExecTransaction(toAddress: string, amount: string, fee: string): Promise<any> {
        if (!this.accountModel) {
            throw 'No account information';
        }

        let bnZ = new BN(0);
        const bnAmount = new BN(amount);
        let bnFee = new BN(fee);

        const data: any = {
            bcname: this.options.chain,
            address: this.accountModel!.address,
            request: {
                initiator: this.accountModel!.address,
                bcname: this.options.chain
            }
        };

        if (this.options.needEndorse) {
            if (this.options.endorseConf) {
                const endorseBNFee = new BN(this.options.endorseConf.fee);
                bnFee = bnFee.add(endorseBNFee);
                data.request.auth_require = [this.options.endorseConf.feeServiceAddress];
            } else {
                throw 'Invalid endorse conf';
            }
        }

        bnZ = bnZ.add(bnAmount).add(bnFee);

        try {
            // Todo: fix - totalAmount field is not bigint
            data.totalAmount = bnZ.toNumber();
        } catch (e) {
            throw 'Pre-exec error';
        }

        const body = {
            RequestName: 'PreExecWithFee',
            BcName: this.options.chain,
            RequestData: btoa(JSON.stringify(data))
        };

        return fetch(`${this.options.endorseConf!.server}/v1/endorsercall`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    publicOrPrivateKeyToString(key: PrivateKeyModel | PublicKeyModel): string {
        return this.accountIns.publicOrPrivateKeyToString(key);
    }

    /**
     * Endorse
     * @param preExecWithUtxos
     */
    private makeCheckTransaction(preExecWithUtxos: any) {
        const {fee, feeAddress} = this.options.endorseConf!;

        const totalNeed = fee;
        const {utxoOutput} = preExecWithUtxos;

        const txInputs = this.makeTxInputs(utxoOutput.utxoList);

        const output = this.makeTxOutput(utxoOutput.totalSelected,
            totalNeed, this.accountModel!.address);

        const txOutputs = this.makeTxOutputs(fee, 0, feeAddress);

        txOutputs.push(output);

        const tx = {
            version: VERSION,
            coinbase: false,
            autogen: false,
            timestamp: parseInt(Date.now().toString().padEnd(19, '0'), 10),
            tx_inputs: txInputs,
            tx_outputs: txOutputs,
            initiator: this.accountModel!.address,
            auth_require: [],
            nonce: this.getNonce()
        };

        const digestHash = this.encodeDataForDigestHash(tx, false);

        const ec = new EC('p256');

        const bnD = new BN(this.accountModel!.privateKey.D);
        const privKey = ec.keyFromPrivate(bnD.toArray());
        const sign = privKey.sign(digestHash);
        const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));

        const signatureInfo = {
            PublicKey: this.accountIns.publicOrPrivateKeyToString(this.accountModel!.publicKey),
            Sign: btoa(derbuf.join(''))
        };

        const signatureInfos = [];
        signatureInfos.push(signatureInfo);
        Object.assign(tx, {
            initiator_signs: signatureInfos
        });

        const digest = this.encodeDataForDigestHash(tx, true);

        Object.assign(tx, {
            txid: btoa(digest.map(v => String.fromCharCode(v)).join(''))
        });

        return tx;
    }

    /**
     * Generate transaction
     * @param toAddress
     * @param amount
     * @param fee
     * @param desc
     */
    async makeTrasaction(toAddress: string, amount: string, fee: string, desc = ''): Promise<any> {
        if (!this.accountModel) {
            throw 'No account information';
        }

        const authRequire = [];

        let preExecWithUtxos;
        let preExecWithUtxosObj;
        try {
            preExecWithUtxos = await this.preExecTransaction(toAddress, amount, fee);
            preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        } catch (e) {
            throw e;
        }

        if (this.options.needEndorse) {
            if (this.options.endorseConf) {
                authRequire.push(this.options.endorseConf.feeServiceAddress);
                const checkTransaction = this.makeCheckTransaction(preExecWithUtxosObj);
                const txOutputs = this.makeTxOutputs(amount, fee, toAddress);

                const utxolist: {
                    amount: any;
                    'to_addr': string;
                    'ref_txid': any;
                    'ref_offset': any;
                }[] = [];
                let
                    totalSelected: number[] = [];

                checkTransaction.tx_outputs.forEach((
                    txOutput: { to_addr: string; amount: any }, index: any
                ) => {
                    if (txOutput.to_addr === btoa(this.accountModel!.address)) {
                        const utxo = {
                            amount: txOutput.amount,
                            to_addr: txOutput.to_addr,
                            // @ts-ignore
                            ref_txid: checkTransaction.txid,
                            ref_offset: index
                        };
                        utxolist.push(utxo);
                        totalSelected = atob(utxo.amount).split('').map(w => w.charCodeAt(0));
                    }
                });

                const utxoOutputs = {
                    utxoList: utxolist,
                    totalSelected
                };

                const totalNeed = new BN(amount).add(new BN(fee));

                const txInputs = this.makeTxInputs(utxoOutputs.utxoList);
                const output = this.makeTxOutput(
                    new BN(totalSelected).toString(10),
                    totalNeed,
                    this.accountModel!.address
                );
                txOutputs.push(output);

                const te = new TextEncoder();
                const descBuf: Uint8Array = te.encode(desc);
                const descArr: string[] = [];
                descBuf.forEach(n => descArr.push(String.fromCharCode(n)));

                const tx = {
                    version: VERSION,
                    desc: btoa(descArr.join('')),
                    coinbase: false,
                    autogen: false,
                    timestamp: parseInt(Date.now().toString().padEnd(19, '0'), 10),
                    tx_inputs: txInputs,
                    tx_outputs: txOutputs,
                    initiator: this.accountModel!.address,
                    auth_require: authRequire,
                    nonce: this.getNonce()
                };

                if (preExecWithUtxosObj.response) {
                    if (preExecWithUtxosObj.response.inputs) {
                        // @ts-ignore
                        tx.tx_inputs_ext = preExecWithUtxosObj.response.inputs;
                    }

                    if (preExecWithUtxosObj.response.outputs) {
                        // @ts-ignore
                        tx.tx_outputs_ext = preExecWithUtxosObj.response.outputs;
                    }

                    if (preExecWithUtxosObj.response.requests) {
                        // @ts-ignore
                        tx.contract_requests = preExecWithUtxosObj.response.requests;
                    }
                }

                const digestHash = this.encodeDataForDigestHash(tx, false);

                const ec = new EC('p256');

                const bnD = new BN(this.accountModel!.privateKey.D);
                const privKey = ec.keyFromPrivate(bnD.toArray());
                const sign = privKey.sign(digestHash);
                const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));

                const signatureInfo = {
                    PublicKey: this.accountIns.publicOrPrivateKeyToString(this.accountModel!.publicKey),
                    Sign: btoa(derbuf.join(''))
                };

                const signatureInfos = [];
                signatureInfos.push(signatureInfo);

                // @ts-ignore
                tx.initiator_signs = signatureInfos;

                const digest = this.encodeDataForDigestHash(tx, true);

                // @ts-ignore
                tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));

                const obj = {
                    bcname: this.options.chain,
                    tx
                };

                const body = {
                    RequestName: 'ComplianceCheck',
                    BcName: 'xuper',
                    Fee: checkTransaction,
                    RequestData: btoa(JSON.stringify(obj))
                };

                // @ts-ignore
                return fetch(`${this.options.endorseConf.server}/v1/endorsercall`, {
                    method: 'POST',
                    body: JSON.stringify(body)
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(res => {
                                throw res;
                            });
                        }
                        return response.json();
                    })
                    .then((result: any) => {
                        // @ts-ignore
                        if (!tx.auth_require_signs) {
                            // @ts-ignore
                            tx.auth_require_signs = [];
                        }

                        // @ts-ignore
                        tx.auth_require_signs.push(result.EndorserSign);

                        const digestWithEndorse = this.encodeDataForDigestHash(tx, true);

                        // @ts-ignore
                        tx.txid = btoa(digestWithEndorse.map(v => String.fromCharCode(v)).join(''));

                        return tx;
                    });
            }
            throw 'Invalid endorse conf';
        }
        throw 'Not yet supported';
    }

    /**
     * Post transaction
     * @param tx
     */
    async postTransaction(tx: any) {
        const tmp = {
            bcname: 'xuper',
            status: 4,
            tx,
            txid: tx.txid
        };

        return fetch(`${this.options.node}/v1/post_tx`, {
            method: 'POST',
            body: JSON.stringify(tmp)
        }).then(response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        });
    }

    /**
     * Query transaction id
     * @param txid
     */
    async queryTransaction(txid: string): Promise<any> {
        const tmp = {
            bcname: 'xuper',
            txid
        };

        return fetch(`${this.options.node}/v1/query_tx`, {
            method: 'POST',
            body: JSON.stringify(tmp)
        }).then(response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        });
    }

    /**
     * Pre-execution constract with utxos
     * @param invokeRequests
     * @param authRequire
     * @param amount
     * @param fee
     */
    preExecConstract(
        invokeRequests: ContracRequesttModel[],
        authRequire: string[],
        amount: string,
        fee: string
    ): Promise<any> {
        if (!this.accountModel) {
            throw 'No account information';
        }

        let bnZ = new BN(0);
        const bnAmount = new BN(amount);
        const bnFee = new BN(fee);

        bnZ = bnZ.add(bnAmount).add(bnFee);

        const data: any = {
            bcname: this.options.chain,
            address: this.accountModel!.address,
            totalAmount: bnZ.toNumber(),
            request: {
                initiator: this.accountModel!.address,
                bcname: this.options.chain,
                auth_require: authRequire,
                requests: invokeRequests
            }
        };

        // try {
        //     // Todo: fix - totalAmount field is not bigint
        //     data.totalAmount = bnZ.toNumber();
        // } catch (e) {
        //     throw 'Pre-exec error';
        // }

        console.log(invokeRequests);
        console.warn(data);

        const body = {
            RequestName: 'PreExecWithFee',
            BcName: this.options.chain,
            RequestData: btoa(JSON.stringify(data))
        };

        console.log(body);

        return fetch(`${this.options.endorseConf!.server}/v1/endorsercall`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    async invokeContract(
        contractName: string,
        methodName: string,
        args: any
    ) {
        if (!this.accountModel) {
            throw 'No account information';
        }

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'wasm',
            method_name: methodName,
            contract_name: contractName,
            args
        }];

        const authRequires: string[] = [];
        if (this.options.endorseConf) {
            authRequires.push(this.options.endorseConf.feeServiceAddress);
            let preExecWithUtxos;
            let preExecWithUtxosObj;
            try {
                preExecWithUtxos = await this.preExecConstract(
                    invokeRequests,
                    authRequires,
                    '0',
                    this.options.endorseConf.fee
                );
                preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
                console.warn(preExecWithUtxosObj);
            } catch (e) {
                throw e;
            }
        }

        // let res = {
        //     initiator: this.accountModel.address,
        //     auth_require: authRequires,
        //     fee = pre
        // }
    }

    private getNonce(): string {
        return (~~(Date.now() / 1000).toString()) + crypto.getRandomValues(new Uint32Array(1))[0].toString();
    }

    private makeTxOutput(
        totalSelected: BN | string | number,
        totalNeed: BN | string | number,
        toAddress: string
    ): any {
        let bnUtxos;
        let bnNeed;
        try {
            bnUtxos = new BN(totalSelected);
            bnNeed = new BN(totalNeed);
        } catch (e) {
            throw 'Invalid params';
        }

        if (bnUtxos.gte(bnNeed)) {
            const delta = bnUtxos.sub(bnNeed);

            return {
                amount: btoa(delta.toArray().map(v => String.fromCharCode(v)).join('')),
                to_addr: btoa(toAddress)
            };
        }
        throw 'Totalselected not enough';
    }

    private makeTxOutputs(
        amount: BN | string | number,
        fee: BN | string | number,
        to: string
    ): any {
        const bnAmount = new BN(amount);
        const bnFee = new BN(fee);

        const accounts = [{
            address: to,
            amount: bnAmount
        }];

        if (bnFee.gt(new BN(0))) {
            accounts.push({
                address: '$',
                amount: bnFee
            });
        }

        return accounts.map(account => ({
            amount: btoa(account.amount.toArray().map(v => String.fromCharCode(v)).join('')),
            to_addr: btoa(account.address)
        }));
    }

    private makeTxInputs(utxos: any[]): any[] {
        return utxos.map(utxo => ({
            ref_txid: utxo.ref_txid || utxo.refTxid,
            ref_offset: utxo.ref_offset || utxo.refOffset,
            from_addr: utxo.to_addr || utxo.toAddr,
            amount: utxo.amount
        }));
    }

    private encodeDataForDigestHash(tx: any, include_signs: boolean) {
        let str = '';

        tx.tx_inputs.forEach(
            (txInput: {
                ref_txid: any;
                ref_offset: any;
                from_addr: any;
                amount: any;
                frozen_height: any;
            }) => {
                if (txInput.ref_txid) {
                    str += jsonEncode(txInput.ref_txid);
                }
                str += jsonEncode(txInput.ref_offset || 0);
                if (txInput.from_addr) {
                    str += jsonEncode(txInput.from_addr);
                }
                if (txInput.amount) {
                    str += jsonEncode(txInput.amount);
                }
                str += jsonEncode(txInput.frozen_height || 0);
            }
        );

        str += jsonEncode(tx.tx_outputs);

        if (tx.desc && tx.desc.length > 0) {
            str += jsonEncode(tx.desc);
        }

        str += jsonEncode(tx.nonce);
        str += jsonEncode(parseInt(tx.timestamp, 10));
        str += jsonEncode(tx.version);

        if (tx.tx_inputs_ext && tx.tx_inputs_ext.length) {
            // @ts-ignore
            tx.tx_inputs_ext.forEach(inputExt => {
                str += jsonEncode(inputExt.bucket);
                if (inputExt.key) {
                    str += jsonEncode(inputExt.key);
                }
                if (inputExt.ref_txid) {
                    str += jsonEncode(inputExt.ref_txid);
                }
                if (inputExt.ref_offset) {
                    str += jsonEncode(inputExt.ref_offset);
                } else {
                    str += jsonEncode(0);
                }
            });
        }

        if (tx.tx_outputs_ext && tx.tx_outputs_ext.length) {
            // @ts-ignore
            tx.tx_outputs_ext.forEach(outputExt => {
                str += jsonEncode(outputExt.bucket);
                if (outputExt.key) {
                    str += jsonEncode(outputExt.key);
                }
                if (outputExt.value) {
                    str += jsonEncode(outputExt.value);
                }
            });
        }

        str += jsonEncode(tx.contract_requests);

        str += jsonEncode(tx.initiator);

        str += jsonEncode(tx.auth_require && tx.auth_require.length > 0 ? tx.auth_require : null);

        if (include_signs) {
            str += jsonEncode(tx.initiator_signs);
            str += jsonEncode(tx.auth_require_signs);
        }

        str += jsonEncode(tx.coinbase);

        str += jsonEncode(tx.autogen);

        const te = new TextEncoder();
        const bytes = te.encode(str);

        return sha256.x2(Array.from(bytes), {asBytes: true});
    }
}
