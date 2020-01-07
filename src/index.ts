/**
 * @file Xuper SDK
 * Created by xinyi on 2019/12/19
 */

import BN from 'bn.js';
import sha256 from 'sha256';
import {ec as EC} from 'elliptic';

import {
    Language, Strength, Cryptography, VERSION
} from './constants';

import {
    jsonEncode, publicOrPrivateKeyToString, postRequest, getNonce, convert
} from './utils';

import {
    XuperSDKInterface, AccountModel, XuperOptions, PrivateKeyModel,
    PublicKeyModel, ContracRequesttModel, Transaction, TransactionInfomation,
    UTXO, TXOutput
} from './interfaces';

import Errors from './error';
import Account from './account';
import generateTransaction, {signTx} from './transaction';

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
     * Key to string
     * @param key
     */
    publicOrPrivateKeyToString(key: PrivateKeyModel | PublicKeyModel): string {
        return publicOrPrivateKeyToString(key);
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
            address: this.accountModel.address,
            request: {
                initiator: this.accountModel.address,
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

    async preExecTransactionWithUTXO(
        sum: string | number | BN,
        authRequire: string[] = [],
        invokeRequests = []
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }
        if (!this.options.endorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const bnSum = new BN(sum);

        const data: any = {
            bcname: this.options.chain,
            address: this.accountModel.address,
            totalAmount: bnSum.toNumber(),
            request: {
                initiator: this.accountModel.address,
                bcname: this.options.chain,
                auth_require: authRequire,
                requests: invokeRequests
            }
        };

        const body = {
            RequestName: 'PreExecWithFee',
            BcName: this.options.chain,
            RequestData: btoa(JSON.stringify(data))
        };

        return postRequest(`${this.options.endorseConf.server}/v1/endorsercall`, body);
    }

    async generateTransaction2(ti: TransactionInfomation) {
        if (!this.options.endorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        const {fee: endorseFee, feeServiceAddress} = this.options.endorseConf;

        const {amount, fee} = ti;

        let totalNeed = new BN(0);

        const authRequires: any = {};


        if (this.options.endorseConf) {
            authRequires[feeServiceAddress] = {
                fee: endorseFee,
                sign: (checkTx: Transaction, tx: Transaction) => {
                    const obj = {
                        bcname: this.options.chain,
                        tx: convert(tx)
                    };

                    const body = {
                        RequestName: 'ComplianceCheck',
                        BcName: 'xuper',
                        Fee: convert(checkTx),
                        RequestData: btoa(JSON.stringify(obj))
                    };

                    console.warn(checkTx.txOutputs);
                    console.warn(tx.txOutputs);
                    console.log(body);

                    const tar = `${this.options.endorseConf!.server}/v1/endorsercall`;

                    return () => fetch(tar, {
                        method: 'POST',
                        body: JSON.stringify(body)
                    })
                        .then(response => {
                            console.log('============1');
                            if (!response.ok) {
                                return response.json().then(res => {
                                    throw res;
                                });
                            }
                            return response.json();
                        })
                        .then((result: any) => {
                            if (!tx.authRequireSigns) {
                                tx.authRequireSigns = [];
                            }

                            tx.authRequireSigns.push(result.EndorserSign);
                            return tx;
                        });
                }
            };
        }

        totalNeed = totalNeed.add(new BN(amount));
        totalNeed = totalNeed.add(new BN(fee));

        Object.keys(authRequires).forEach(key => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(totalNeed, Object.keys(authRequires));
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        const {utxoOutput} = preExecWithUtxosObj;

        const checkTx = generateTransaction(
            this.accountModel, {utxoOutput}, [], {amount: endorseFee, fee: 0, to: feeServiceAddress}
        );

        let totalSelected: number[] = [];
        const utxoList: UTXO[] = [];

        checkTx.txOutputs.forEach((
            txOutput: TXOutput, index: number
        ) => {
            if (txOutput.toAddr === btoa(this.accountModel!.address)) {
                const utxo: UTXO = {
                    amount: txOutput.amount,
                    toAddr: txOutput.toAddr,
                    refTxid: checkTx.txid!,
                    refOffset: index
                };
                utxoList.push(utxo);
                totalSelected = atob(utxo.amount).split('').map(w => w.charCodeAt(0));
            }
        });

        const newUtxoOutput = {
            utxoList,
            totalSelected
        };

        const tx = generateTransaction(
            this.accountModel,
            {...preExecWithUtxosObj, utxoOutput: newUtxoOutput},
            Object.keys(authRequires),
            ti
        );

        // console.log(tx);

        const auth = authRequires[feeServiceAddress];

        const authFunc = auth.sign(checkTx, tx);

        console.log(await signTx(authFunc));
    }

    /**
     * Endorse
     * @param preExecWithUtxos
     */
    private makeCheckTransaction(preExecWithUtxos: any) {
        const {fee, feeServiceAddress} = this.options.endorseConf!;

        const totalNeed = fee;
        const {utxoOutput} = preExecWithUtxos;

        const txInputs = this.makeTxInputs(utxoOutput.utxoList);

        const output = this.makeTxOutput(utxoOutput.totalSelected,
            totalNeed, this.accountModel!.address);

        const txOutputs = this.makeTxOutputs(fee, 0, feeServiceAddress);

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
            nonce: getNonce()
        };

        const digestHash = this.encodeDataForDigestHash(tx, false);

        const ec = new EC('p256');

        const bnD = new BN(this.accountModel!.privateKey.D);
        const privKey = ec.keyFromPrivate(bnD.toArray());
        const sign = privKey.sign(digestHash);
        const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));

        const signatureInfo = {
            PublicKey: this.publicOrPrivateKeyToString(this.accountModel!.publicKey),
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

    async generateTransaction(
        authRequire: string[],
        toAddress: string,
        amount: string,
        fee: string,
        desc = '',
        preExecWithUtxosObj: any
    ): Promise<any> {
        const checkTransaction = this.makeCheckTransaction(preExecWithUtxosObj);
        const txOutputs = this.makeTxOutputs(amount, fee, toAddress);

        const utxolist: {
            amount: any;
            'to_addr': string;
            'ref_txid': any;
            'ref_offset': any;
        }[] = [];

        let totalSelected: number[] = [];

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
            nonce: getNonce()
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
            PublicKey: this.publicOrPrivateKeyToString(this.accountModel!.publicKey),
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
                tx.auth_require_signs.push(signatureInfo);
                // @ts-ignore
                tx.auth_require_signs.push(result.EndorserSign);

                const digestWithEndorse = this.encodeDataForDigestHash(tx, true);

                // @ts-ignore
                tx.txid = btoa(digestWithEndorse.map(v => String.fromCharCode(v)).join(''));

                return tx;
            });
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

                let totalSelected: number[] = [];

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
                    nonce: getNonce()
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
                    PublicKey: this.publicOrPrivateKeyToString(this.accountModel!.publicKey),
                    Sign: btoa(derbuf.join(''))
                };

                const signatureInfos = [];
                signatureInfos.push(signatureInfo);

                // @ts-ignore
                tx.initiator_signs = signatureInfos;

                const digest = this.encodeDataForDigestHash(tx, true);

                // @ts-ignore
                tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));

                // ----------------

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

    async invokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
    ) {
        if (!this.accountModel) {
            throw 'No account information';
        }

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: moduleName, // 'wasm',
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
                const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
                const tx = await this.generateTransaction(authRequires, '', '0',
                    gasUsed.toString(), '', preExecWithUtxosObj);
                console.log(tx);
                const result = await this.postTransaction(tx);
                console.warn(result);
            } catch (e) {
                throw e;
            }
        }
    }

    async createContractAccount(contractAccountName: number) {
        if (!this.accountModel) {
            throw 'No account information';
        }

        if (contractAccountName < 10 ** 15
            || contractAccountName >= 10 ** 16) {
            throw 'Conrtact account must be numbers of length 16';
        }

        // const prefixes = 'XC';
        // const contractAccount = `${prefixes}${contractAccountName}@${this.options.chain}`;

        const defaultACL = {
            pm: {
                rule: 1,
                acceptValue: 1.0
            },
            aksWeight: {
                [this.accountModel.address]: 1.0
            }
        };

        const args = {
            account_name: btoa(contractAccountName.toString()),
            acl: btoa(JSON.stringify(defaultACL))
        };

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'xkernel', // 'wasm',
            method_name: 'NewAccount',
            args
        }];

        const authRequires: string[] = [];
        // if (this.options.endorseConf) {
        authRequires.push(this.options.endorseConf!.feeServiceAddress);
        const preExecWithUtxos = await this.preExecConstract(invokeRequests,
            authRequires, '0', this.options.endorseConf!.fee);

        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.generateTransaction(authRequires, '', '0',
            gasUsed.toString(), '', preExecWithUtxosObj);
        const result = await this.postTransaction(tx);
        console.log(result);
        // }
        // throw 'bug';
    }

    async deployWasmContract(
        contractAccount: string,
        contractName: string,
        code: string,
        runtime: string,
        initArgs: any
    ) {
        if (!this.accountModel) {
            throw 'No account information';
        }

        const newInitArgs = {
            ...initArgs
        };

        Object.keys(initArgs).forEach(key => {
            newInitArgs[key] = btoa(initArgs[key]);
        });

        const desc = new Uint8Array([10, 1].concat(runtime.split('').map(w => w.charCodeAt(0))));
        const descBuf = Object.values(desc).map(n => String.fromCharCode(n));

        const args = {
            account_name: contractAccount,
            contract_name: contractName,
            contract_desc: descBuf.join(''),
            contract_code: code,
            init_args: JSON.stringify(newInitArgs)
        };

        const contractArgs = {
            ...args
        };

        Object.keys(contractArgs).forEach(key => {
            // @ts-ignore
            contractArgs[key] = btoa(contractArgs[key]);
        });

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'Deploy',
            args: contractArgs
        }];

        const authRequires: string[] = [`${contractAccount}/${this.accountModel.address}`];
        authRequires.push(this.options.endorseConf!.feeServiceAddress);

        const preExecWithUtxos = await this.preExecConstract(invokeRequests,
            authRequires, '0', this.options.endorseConf!.fee);

        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;

        // console.error(gasUsed);

        // const authRequires2: string[] = [`${contractAccount}/${this.accountModel!.address}`];

        const tx = await this.generateTransaction(authRequires, '', '0',
            gasUsed.toString(), '', preExecWithUtxosObj);
        console.warn(tx);
        const result = await this.postTransaction(tx);
        console.log(result);
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

        const accounts = [];

        if (to) {
            accounts.push({
                address: to,
                amount: bnAmount
            });
        }

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

export {Language, Strength, Cryptography} from './constants';
