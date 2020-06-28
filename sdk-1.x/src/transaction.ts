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
    AccountModel, Transaction, TXOutput, TXInput, TransactionInfomation, UTXO
} from './interfaces';
import {
    getNonce, jsonEncode, publicOrPrivateKeyToString, convert
} from './utils';

function makeTxOutput(
    totalSelected: BN | string | number, totalNeed: BN | string | number, toAddress: string
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

function makeTxOutputs(
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

function makeTxInputs(utxos: UTXO[]): TXInput[] {
    const txInputs: TXInput[] = [];
    utxos.forEach(utxo => txInputs.push({
        refTxid: utxo.refTxid,
        refOffset: utxo.refOffset,
        fromAddr: utxo.toAddr,
        amount: utxo.amount
    } as TXInput));
    return txInputs;
}

function encodeDataForDigestHash(tx: Transaction, include_signs: boolean) {
    let str = '';

    tx.txInputs.forEach(
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

    str += jsonEncode(convert(tx.txOutputs));

    if (tx.desc && tx.desc.length > 0) {
        str += jsonEncode(tx.desc);
    }

    str += jsonEncode(tx.nonce);
    str += jsonEncode(tx.timestamp);
    str += jsonEncode(tx.version);

    if (tx.txInputsExt && tx.txInputsExt.length) {
        tx.txInputsExt.forEach(inputExt => {
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

    if (tx.txOutputsExt && tx.txOutputsExt.length) {
        tx.txOutputsExt.forEach(outputExt => {
            str += jsonEncode(outputExt.bucket);
            if (outputExt.key) {
                str += jsonEncode(outputExt.key);
            }
            if (outputExt.value) {
                str += jsonEncode(outputExt.value);
            }
        });
    }

    str += jsonEncode(tx.contractRequests);

    str += jsonEncode(tx.initiator);

    str += jsonEncode(tx.authRequire && tx.authRequire.length > 0 ? tx.authRequire : null);

    if (include_signs) {
        str += jsonEncode(tx.initiatorSigns);
        str += jsonEncode(tx.authRequireSigns);
    }

    str += jsonEncode(tx.coinbase);

    str += jsonEncode(tx.autogen);

    const te = new TextEncoder();
    const bytes = te.encode(str);

    return sha256.x2(Array.from(bytes), {asBytes: true});
}

export default function generateTransaction(
    account: AccountModel,
    preExecWithUtxos: any,
    authRequires: any,
    ti: TransactionInfomation
): Transaction {
    const {utxoOutput, response} = preExecWithUtxos;
    const {utxoList, totalSelected} = utxoOutput;

    const {
        amount, fee, to, desc
    } = ti;

    // inputs
    const txInputs = makeTxInputs(utxoList);

    // outputs
    const txOutputs = makeTxOutputs(amount, fee, to);

    let totalNeed = new BN(0);
    totalNeed = totalNeed.add(new BN(amount));
    totalNeed = totalNeed.add(new BN(fee));

    txOutputs.push(makeTxOutput(totalSelected, totalNeed, account.address));

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
        timestamp: parseInt(Date.now().toString().padEnd(19, '0'), 10),
        txInputs,
        txOutputs,
        initiator: account.address,
        authRequire: authRequires,
        nonce: getNonce()
    } as Transaction;

    if (descArr.length > 0) {
        tx.desc = btoa(descArr.join(''));
    }

    if (response) {
        // inputs ext
        if (response.inputs) {
            tx.txInputsExt = response.inputs;
        }

        // outputs ext
        if (response.outputs) {
            tx.txOutputsExt = response.outputs;
        }

        // contract request
        if (response.requests) {
            tx.contractRequests = response.requests;
        }
    }

    const digestHash = encodeDataForDigestHash(tx, false);

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
    const digest = encodeDataForDigestHash(tx, true);

    // txid
    tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));

    return tx;
}

export function signTx(tx: Transaction): Transaction {
    const digest = encodeDataForDigestHash(tx, true);
    tx.txid = btoa(digest.map(v => String.fromCharCode(v)).join(''));
    return tx;
}
