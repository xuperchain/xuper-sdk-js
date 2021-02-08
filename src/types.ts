/**
 * @file Types
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

/* ---------- Basic ---------- */

import BN from 'bn.js';

export type ErrorOptions = {
    name?: string;
    isFront?: boolean;
    stackIgnore?: [number, number];
}

export type Plugin = {
    name: string;
    func: PluginFunc;
    hookFuncs: string[];
    args: any;
    init: Function;
}

type PluginFunc = {
    [prop: string]: Function;
}

export type Options = {
    node: string;
    chain: string;
    plugins?: Plugin[];
    env?: {
        node?: {
            disableGRPC?: boolean;
        };
    };
}

/* ---------- Account ---------- */

export type PublicKey = {
    X: string;
    Y: string;
    Curvname: string;
}

export type PrivateKey = {
    D: string;
} & PublicKey

export type AccountModel = {
    publicKey: PublicKey;
    privateKey: PrivateKey;
    mnemonic?: string;
    address: string;
}

/* ---------- Transaction ---------- */

export type TransactionInfomationModel = {
    to: string;
    amount: string | number | BN;
    fee?: string | number | BN;
    desc?: string;
}

export type ContractRequesttModel = {
    module_name: string;
    contract_name?: string;
    method_name: string;
    args: any;
}

export type AuthModel = {
    fee: string | number | BN;
    sign: Function;
}

/**
 * @hidden
 * Model Interface - transaction input
 */
export type TXInput = {
    refTxid: string;
    refOffset: number;
    fromAddr: string;
    amount: string;
    frozenHeight?: number;
}

/**
 * @hidden
 * Model Interface - transaction output
 */
export type TXOutput = {
    amount: string;
    toAddr: string;
}

/**
 * @hidden
 * Model Interface - UTXO
 */
export type UTXO = {
    amount: string;
    toAddr: string;
    refOffset: number;
    refTxid: string;
}

export type SignInfoModel = {
    PublicKey: string;
    Sign: string;
}

export type TransactionModel = {
    /**
     * SDK version
     */
    version: number;

    /**
     * Timestamp
     */
    timestamp: number;

    coinbase: boolean;

    autogen: boolean;

    /**
     * Transaction description
     */
    desc: string;

    /**
     * Inputs
     */
    txInputs: TXInput[];

    /**
     * Outputs
     */
    txOutputs: any[];

    /**
     * Transaction initiator
     */
    initiator: string;

    /**
     * initiator sign
     */
    initiatorSigns?: SignInfoModel[];

    /**
     * Nonce
     */
    nonce: string;

    /**
     * Auth
     */
    authRequire: string[];

    /**
     * Auth sign
     */
    authRequireSigns?: any[];

    /**
     * Transaction ID
     */
    txid?: string;

    /**
     * Inputs
     */
    txInputsExt?: any[];

    /**
     * Outputs
     */
    txOutputsExt?: any[];

    /**
     * Contract requests
     */
    contractRequests?: any[];
}
