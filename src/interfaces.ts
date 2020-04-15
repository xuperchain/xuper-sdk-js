/**
 * @file Xuper SDK interfaces
 * Created by xinyi on 2019/12/19
 */

import BN from 'bn.js';
import {Cryptography, Language, Strength} from './constants';

/*
-------------------------------------------------------------------------------
Model
-------------------------------------------------------------------------------
 */

/**
 * Model Interface - Public key
 */
export interface PublicKeyModel {
    Curvname: string;
    X: string;
    Y: string;
}

/**
 * Model Interface - Private key
 */
export interface PrivateKeyModel extends PublicKeyModel {
    D: string;
}

/**
 * Model Interface - Xuper account
 */
export interface AccountModel {
    /**
     * Account address
     */
    address: string;

    /**
     * Account mnemonic
     */
    mnemonic?: string;

    /**
     * Account public key model
     */
    publicKey: PublicKeyModel;

    /**
     * Account private key model
     */
    privateKey: PrivateKeyModel;
}

export interface ContracRequesttModel {
    /**
     * Contract module name
     */
    module_name: string;

    /**
     * Contract name
     */
    contract_name?: string;

    /**
     * Contract method name
     */
    method_name: string;

    /**
     * Contract arguments
     */
    args: any;
}

export interface AuthInterface {
    fee: string | number | BN;
    sign: Function;
}

/**
 * @hidden
 * Model Interface - transaction input
 */
export interface TXInput {
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
export interface TXOutput {
    amount: string;
    toAddr: string;
}

/**
 * @hidden
 * Model Interface - UTXO
 */
export interface UTXO {
    amount: string;
    toAddr: string;
    refOffset: number;
    refTxid: string;
}

/**
 * @hidden
 * Model Interface - signinfo
 */
export interface SignInfoModel {
    PublicKey: string;
    Sign: string;
}

/**
 * @hidden
 * Model Interface - transaction infomation
 */
export interface TransactionInfomation {
    amount: string | number | BN;
    fee: string | number | BN;
    to: string;
    desc?: string;
}

/**
 * Model Interface - Transaction
 */
export interface Transaction {
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
     * auth
     */
    authRequire: string[];

    /**
     * auth sign
     */
    authRequireSigns?: any[];

    /**
     * Transaction ID
     */
    txid?: string;

    txInputsExt?: any[];

    txOutputsExt?: any[];

    contractRequests?: any[];
}


/*
-------------------------------------------------------------------------------
Configuration
-------------------------------------------------------------------------------
 */

export interface XuperEndorseConf {
    fee: string;
    server: string;
    complianceCheckfeeAddress: string;
    feeServiceAddress: string;
}

/**
 * Configuration Interface - Xuper otpions
 */
export interface XuperOptions {
    /**
     * Peer ip & port
     */
    node: string;

    /**
     * Blockchain name
     */
    chain: string;

    /**
     * Endorse service
     */
    needEndorse?: boolean;

    /**
     * Endorse conf
     */
    endorseConf?: XuperEndorseConf;
}

/*
-------------------------------------------------------------------------------
Class interface
-------------------------------------------------------------------------------
 */

/**
 * Class Interface - Xuper SDK
 */
export interface XuperSDKInterface {
    /**
     * Account class instance
     */
    accountIns: AccountInerface;

    /**
     * Account model
     */
    accountModel?: AccountModel;

    /**
     * SDK conf
     */
    options: XuperOptions;

    /**
     * Create new account
     * @param language
     * @param strength - easy: 12, middle: 16，hard: 24
     * @param cryptography - EccFIPS
     */
    createAccount(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    /**
     * Revert account with mnemonic
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revertAccount(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel;

    /**
     * Local account balance or target address
     * @param address
     */
    getBalance(address?: string): Promise<any>;

    /**
     * Local account balance detail or target address detail
     * @param address
     */
    getBalanceDetail(address?: string): Promise<any>;

    /**
     * Check address valid
     * @param address
     */
    checkAddress(address: string): boolean;

    /**
     * Check mnemonic valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean;

    /**
     * Pre-execution transaction with utxos
     * @param sum
     * @param authRequire
     * @param invokeRequests
     */
    preExecTransactionWithUTXO(
        sum: string | number | BN,
        authRequire: string[],
        invokeRequests: ContracRequesttModel[]
    ): Promise<any>;

    /**
     * Generate transaction
     * @param ti
     */
    generateTransaction(ti: TransactionInfomation): Promise<Transaction>;

    /**
     * Post transaction
     * @param tx
     */
    postTransaction(tx: any): any;

    /**
     * Query transaction id
     * @param txid
     */
    queryTransaction(txid: string): Promise<any>;

    /**
     * Invoke contract
     * @param contractName
     * @param methodName
     * @param moduleName
     * @param args
     */
    invokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
    ): Promise<any>;

    /**
     * Create contract account
     * @param contractAccountName
     */
    createContractAccount(contractAccountName: number): Promise<any>;

    /**
     * Deploy wasm contract
     * @param contractAccount
     * @param contractName
     * @param code
     * @param runtime
     * @param initArgs
     */
    deployWasmContract(
        contractAccount: string,
        contractName: string,
        code: string,
        runtime: string,
        initArgs: any
    ): Promise<any>;
}

/**
 * Interface - Xuper Account
 */
export interface AccountInerface {
    /**
     * Create new account
     * @param language - mnemonic language
     * @param strength - mnemonic strength
     * @param cryptography - cryptography
     */
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    /**
     * Revert account with mnemonic words
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revert(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel;

    /**
     * Check address is valid
     * @param address
     */
    checkAddress(address: string): boolean;

    /**
     * Check mnemonic is valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean;
}
