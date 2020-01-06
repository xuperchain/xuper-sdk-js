/**
 * @file Transaction
 * Created by xinyi on 2020/1/2
 */

import BN from 'bn.js';
import sha256 from 'sha256';
import {ec as EC} from 'elliptic';
import {VERSION} from './constants';
import Errors from './error';
import {
    XuperEndorseConf, AccountModel, TransactionInterface, TXOutput, TXInput, SignInfoModel, UTXO
} from './interfaces';
import {getNonce, jsonEncode, publicOrPrivateKeyToString} from './utils';

export default class Transaction implements TransactionInterface {
    account: AccountModel;

    version = VERSION;

    timestamp = parseInt(Date.now().toString().padEnd(19, '0'), 10);

    autogen = false;

    coinbase = false;

    desc = new Uint8Array();

    txInputs: TXInput[];

    txOutputs: TXOutput[];

    initiator: string;

    nonce: string;

    authRequire: string[];

    txInputsExt?: any[];

    txOutputsExt?: any[];

    contractRequests?: any[];

    initiatorSigns?: SignInfoModel[];

    authRequireSigns?: any[];

    txid: string;

    constructor(
        account: AccountModel,
        preExecWithUtxos: any,
        toAddress: string,
        amount: number | string | BN,
        fee: number | string | BN,
        desc = '',
        authRequire = {}
    ) {
        const {utxoOutput, response} = preExecWithUtxos;

        this.account = account;
        const bnAmount = new BN(amount);
        const bnFee = new BN(fee);
        const totalNeed = new BN(0);
        totalNeed.add(bnAmount).add(bnFee);

        // inputs
        this.txInputs = this.makeTxInputs(utxoOutput.utxoList);

        // outputs
        const output = this.makeTxOutput(utxoOutput.totalSelected, totalNeed, this.account.address);
        const txOutputs = this.makeTxOutputs(fee, 0, toAddress);
        txOutputs.push(output);
        this.txOutputs = txOutputs;

        // description
        const te = new TextEncoder();
        const descBuff: Uint8Array = te.encode(desc);
        const descArr: string[] = [];
        descBuff.forEach(n => descArr.push(String.fromCharCode(n)));
        this.desc = descBuff;

        // initiator
        this.initiator = this.account.address;

        // nonce
        this.nonce = getNonce();

        // auth
        this.authRequire = Object.keys(authRequire);

        if (response) {
            // input ext
            if (response.inputs) {
                this.txInputsExt = response.inputs;
            }

            // output ext
            if (response.outputs) {
                this.txOutputsExt = response.outputs;
            }

            // contract requests
            if (response.requests) {
                this.contractRequests = response.requests;
            }
        }

        const digestHash = this.encodeDataForDigestHash(false);

        const ec = new EC('p256');
        const bnD = new BN(account.privateKey.D);
        const privKey = ec.keyFromPrivate(bnD.toArray());
        const sign = privKey.sign(digestHash);
        const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));

        // sign
        const signatureInfo = {
            PublicKey: publicOrPrivateKeyToString(account.publicKey),
            Sign: btoa(derbuf.join(''))
        };

        const signatureInfos = [];
        signatureInfos.push(signatureInfo);

        this.initiatorSigns = signatureInfos;

        const digest = this.encodeDataForDigestHash(true);

        this.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));

        if (this.authRequire.length > 0) {
            // this.authRequire.map(key => {
            //     authRequire[key];
            // });
        }
    }

    private encodeDataForDigestHash(include_signs: boolean) {
        let str = '';

        this.txInputs.forEach(
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

        str += jsonEncode(this.txOutputs);

        if (this.desc && this.desc.length > 0) {
            str += jsonEncode(this.desc);
        }

        str += jsonEncode(this.nonce);
        str += jsonEncode(this.timestamp);
        str += jsonEncode(this.version);

        if (this.txInputsExt && this.txInputsExt.length) {
            // @ts-ignore
            this.txInputsExt.forEach(inputExt => {
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

        if (this.txOutputsExt && this.txOutputsExt.length) {
            // @ts-ignore
            this.txOutputsExt.forEach(outputExt => {
                str += jsonEncode(outputExt.bucket);
                if (outputExt.key) {
                    str += jsonEncode(outputExt.key);
                }
                if (outputExt.value) {
                    str += jsonEncode(outputExt.value);
                }
            });
        }

        str += jsonEncode(this.contractRequests);

        str += jsonEncode(this.initiator);

        str += jsonEncode(this.authRequire && this.authRequire.length > 0 ? this.authRequire : null);

        if (include_signs) {
            str += jsonEncode(this.initiatorSigns);
            str += jsonEncode(this.authRequireSigns);
        }

        str += jsonEncode(this.coinbase);

        str += jsonEncode(this.autogen);

        const te = new TextEncoder();
        const bytes = te.encode(str);

        return sha256.x2(Array.from(bytes), {asBytes: true});
    }

    private makeTxOutput(
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
            throw Errors.INVALID_PARAMS;
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

    private makeTxOutputs(
        amount: BN | string | number,
        fee: BN | string | number,
        to: string
    ): TXOutput[] {
        const bnAmount = new BN(amount);
        const bnFee = new BN(fee);
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

    private makeTxInputs = (
        utxos: UTXO[]
    ): TXInput[] => utxos.map(utxo => ({
        refTxid: utxo.refTxid,
        refOffset: utxo.refOffset,
        fromAddr: utxo.toAddr,
        amount: utxo.amount
    }));
}
