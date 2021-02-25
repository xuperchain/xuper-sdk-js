/**
 * @file Transaction
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {ContractRequesttModel, TransactionInfomationModel, AuthModel, AccountModel, TXInput, TXOutput, UTXO, TransactionModel, Plugin} from './types';
import * as Requests from './requests';
import BN from 'bn.js';
import Errors from './error';
import {convert, getNonce, jsonEncode, publicOrPrivateKeyToString} from './utils';
import sha256 from 'sha256';
import {VERSION} from './constants';
import {ec as EC} from 'elliptic';
import stringify from 'json-stable-stringify';

export default class Transaction {

    private plugins: Plugin[];

    constructor(plugins: Plugin[] = []) {
        this.plugins = plugins;
    }

    async preExec (
        node: string,
        chain: string,
        address: string,
        authRequire: string[] = [],
        invokeRequests: ContractRequesttModel[] = []
    ): Promise<any> {
        const body = {
            initiator: address,
            bcname: chain,
            auth_require: authRequire,
            requests: invokeRequests
        };

        return Requests.preExec(node, body);
    }

    async preExecWithUTXO(
        node: string,
        chain: string,
        address: string,
        sum: string | number | BN,
        authRequire: string[] = [],
        invokeRequests: ContractRequesttModel[] = [],
        account?: AccountModel
    ): Promise<any> {
        const bnSum = new BN(sum);

        const data: any = {
            bcname: chain,
            address: address,
            totalAmount: bnSum.toNumber(),
            request: {
                initiator: address,
                bcname: chain,
                auth_require: authRequire,
                requests: invokeRequests
            }
        };

        let body = {
            RequestName: 'PreExecWithFee',
            BcName: chain,
            RequestData: btoa(JSON.stringify(data))
        };

        if (this.plugins.length > 0 && this.plugins.findIndex(item => item.hookFuncs.indexOf('postTx') > -1) > -1) {
            for (const plugin of this.plugins) {
                if (plugin.func['postTx']) {
                    body = await plugin.func['postTx'].call(this, plugin.args['postTx'],
                        node, chain, body, account);
                }
            }
        }

        // return Requests.endorser(node, body);
        return Requests.preExecWithFee(node, data);
    }

    makeTxOutput(
        totalSelected: BN | string | number,
        totalNeed: BN | string | number,
        toAddress: string
    ): TXOutput {
        let bnUtxos;
        let bnNeed;

        try {
            bnUtxos = new BN(totalSelected);
            bnNeed = new BN(totalNeed);
        } catch (e) {
            throw Errors.PARAMETER_ERROR;
        }

        if (bnUtxos.gte(bnNeed)) {
            const delta = bnUtxos.sub(bnNeed);
            return {
                amount: btoa(delta.toArray().map(v => String.fromCharCode(v)).join('')),
                toAddr: btoa(toAddress)
            };
        }
        throw Errors.UTXO_NOT_ENOUGH;
    }

    makeTxOutputs(
        amount: BN | string | number,
        fee?: BN | string | number,
        to?: string
    ): TXOutput[] {
        const bnAmount = new BN(amount);
        const bnFee = new BN(fee || 0);
        const accounts = [];

        to && accounts.push({
            address: to,
            amount: bnAmount
        });

        bnFee.gt(new BN(0)) && accounts.push({
            address: '$',
            amount: bnFee
        });

        return accounts.map(account => ({
            amount: btoa(account.amount.toArray().map(v => String.fromCharCode(v)).join('')),
            toAddr: btoa(account.address)
        }));
    }

    makeTxInputs(
        utxos: UTXO[]
    ): TXInput[] {
        const txInputs: TXInput[] = [];
        utxos.forEach(utxo => txInputs.push({
            refTxid: utxo.refTxid,
            refOffset: utxo.refOffset || 0,
            fromAddr: utxo.toAddr,
            amount: utxo.amount
        } as TXInput));
        return txInputs;
    }

    encodeDataForDigestHash(tx: TransactionModel, include_signs: boolean) {
        const newtx: TransactionModel = JSON.parse(JSON.stringify(tx));

        let str = '';

        newtx.txInputs.forEach(
            (txInput: TXInput) => {
                if (txInput.refTxid) {
                    str += jsonEncode(txInput.refTxid);
                }
                str += jsonEncode(txInput.refOffset || 0);
                if (txInput.fromAddr) {
                    str += jsonEncode(txInput.fromAddr);
                }
                if (txInput.amount) {
                    str += jsonEncode(txInput.amount);
                }
                str += jsonEncode(txInput.frozenHeight || 0);
            }
        );

        str += jsonEncode(convert(newtx.txOutputs));

        if (newtx.desc && newtx.desc.length > 0) {
            str += jsonEncode(newtx.desc);
        }

        str += jsonEncode(newtx.nonce);
        str += jsonEncode(newtx.timestamp);
        str += jsonEncode(newtx.version);

        if (newtx.txInputsExt && newtx.txInputsExt.length) {
            newtx.txInputsExt.forEach(inputExt => {
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

        if (newtx.txOutputsExt && newtx.txOutputsExt.length) {
            newtx.txOutputsExt.forEach(outputExt => {
                str += jsonEncode(outputExt.bucket);
                if (outputExt.key) {
                    str += jsonEncode(outputExt.key);
                }
                if (outputExt.value) {
                    str += jsonEncode(outputExt.value);
                }
            });
        }

        if (newtx.contractRequests && newtx.contractRequests.length > 0) {
            // @ts-ignore
            newtx.contractRequests = newtx.contractRequests.map((req: any) => {
                if (req.args) {
                    req.args = JSON.parse(stringify(req.args));
                    Object.keys(req.args).map((key: string) => {
                        if (req.args[key] === "") {
                            req.args[key] = null
                        }
                    });
                }
                return req;
            });
        }

        // @ts-ignore
        str += jsonEncode(convert(newtx.contractRequests, ['jsonEncoded']));

        str += jsonEncode(newtx.initiator);

        str += jsonEncode(newtx.authRequire && newtx.authRequire.length > 0 ? newtx.authRequire : null);

        if (include_signs) {
            str += jsonEncode(newtx.initiatorSigns);
            str += jsonEncode(newtx.authRequireSigns);
        }

        str += jsonEncode(newtx.coinbase);

        str += jsonEncode(newtx.autogen);

        const te = new TextEncoder();
        const bytes = te.encode(str);

        return sha256.x2(Array.from(bytes), {asBytes: true});
    }

    generateTransaction(
        account: AccountModel,
        preExecWithUtxos: any,
        authRequires: any,
        ti: TransactionInfomationModel
    ): TransactionModel {
        const {utxoOutput, response} = preExecWithUtxos;
        const {utxoList, totalSelected} = utxoOutput;

        const {
            amount, fee, to, desc
        } = ti;

        // inputs
        const txInputs = this.makeTxInputs(utxoList);

        // outputs
        const txOutputs = this.makeTxOutputs(amount, fee, to);

        let totalNeed = new BN(0);
        totalNeed = totalNeed.add(new BN(amount));

        if (fee)
            totalNeed = totalNeed.add(new BN(fee));


        txOutputs.push(this.makeTxOutput(totalSelected, totalNeed, account.address));

        // desc
        const te = new TextEncoder();
        const descBuff: Uint8Array = te.encode(desc);
        const descArr: string[] = [];
        descBuff.forEach(n => descArr.push(String.fromCharCode(n)));

        // transaction
        const tx = {
            version: VERSION,
            coinbase: false,
            autogen: false,
            timestamp: Date.now(),
            txInputs,
            txOutputs,
            initiator: account.address,
            authRequire: authRequires,
            nonce: getNonce()
        } as TransactionModel;

        if (descArr.length > 0) {
            tx.desc = btoa(descArr.join(''));
        }

        if (response) {
            // inputs ext
            if (response.inputs && response.inputs.length) {
                tx.txInputsExt = response.inputs;
            }

            // outputs ext
            if (response.outputs && response.outputs.length) {
                tx.txOutputsExt = response.outputs;
            }

            // contract request
            if (response.requests && response.requests.length) {
                tx.contractRequests = response.requests;
            }
        }

        const digestHash = this.encodeDataForDigestHash(tx, false);

        // sign
        const ec = new EC('p256');
        const bnD = new BN(account.privateKey.D);
        const privKey = ec.keyFromPrivate(bnD.toArray());
        const sign = privKey.sign(digestHash);
        const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));
        const signatureInfos = [];
        const signatureInfo = {
            PublicKey: publicOrPrivateKeyToString(account.publicKey),
            Sign: btoa(derbuf.join(''))
        };
        signatureInfos.push(signatureInfo);
        tx.initiatorSigns = signatureInfos;
        const digest = this.encodeDataForDigestHash(tx, true);

        // txid
        tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));

        return tx;
    }

    async post(node: string, chain: string, tx: any, account?: AccountModel): Promise<any> {

        let body = {
            bcname: chain,
            status: 4,
            tx,
            txid: tx.txid
        };

        if (this.plugins.length > 0 && this.plugins.findIndex(item => item.hookFuncs.indexOf('postTx') > -1) > -1) {
            for (const plugin of this.plugins) {
                if (plugin.func['postTx']) {
                    body = await plugin.func['postTx'].call(this, plugin.args['postTx'],
                        node, chain, body, account);
                }
            }
        }

        return Requests.postTransaction(node, body);
    }

    async makeTransaction(
        account: AccountModel,
        ti: TransactionInfomationModel,
        authRequires: { [propName: string]: AuthModel },
        preExecWithUtxosObj: any
    ): Promise<TransactionModel> {
        const newPreExecWithUtxosObj = {...preExecWithUtxosObj};

        let tx: TransactionModel;

        if (this.plugins.length > 0 && this.plugins.every(item => item.hookFuncs.indexOf('makeTransaction') > -1)) {
            for (const plugin of this.plugins) {
                tx = await plugin.func['makeTransaction'].call(this, plugin.args['makeTransaction'], account, ti, authRequires, preExecWithUtxosObj)
            }
        }
        else {
            tx = this.generateTransaction(
                account,
                newPreExecWithUtxosObj,
                Object.keys(authRequires),
                ti
            );

            // @ts-ignore
            await Object.keys(authRequires).reduce(async (prov: any, cur: any): Promise<any> => {
                const auth = authRequires[cur];
                tx = await auth.sign(null, await tx);
                return tx;
            }, 0);
        }

        // @ts-ignore
        const res = convert(this.signTx(tx), ['jsonEncoded']);

        return res;
    }

    async queryTransaction(node: string, chain: string, txid: string): Promise<any> {
        const body = {
            bcname: chain,
            txid
        };

        return Requests.queryTransaction(node, body);
    }

    signTx(tx: TransactionModel): TransactionModel {
        const digest = this.encodeDataForDigestHash(tx, true);
        tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));
        return tx;
    }
}
