/**
 * @file Interfaces
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2019/12/19
 */

/* ---------- Xuper SDK ---------- */

import {Cryptography, Language, Strength} from './constants';

import {AccountModel, TransactionModel, PublicKey} from './types';

export default interface XuperSDKInterface extends AccountInterface, TransactionInterface, ContractInterface {
    checkStatus(): Promise<any>;

    transactionIdToHex(t: Required<string>): string;
}

/* ---------- Account ---------- */

export interface AccountInterface {
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    retrieve(mnemonic: string, language: Language, cryptography: Cryptography, cache?: boolean): AccountModel;

    import(password: string, privateKeyStr: string, cache?: boolean): AccountModel;

    export(password: string): string;

    publicKey(publicKey: PublicKey): string;

    checkAddress(address?: string): boolean;

    checkMnemonic(mnemonic: string, language: Language): boolean;

    getBalance(address?: string): Promise<any>;

    getBalanceDetail(address?: string): Promise<any>;

}

/* ---------- Transaction ---------- */

export interface TransactionInterface {
    // preExec(address: string, authRequire: AuthModel[], invokeRequests: any): Promise<any>
    // preExecWithUTXO(): Promise<any>;
    // makeTransaction(): Promise<any>;
    postTransaction(tx: TransactionModel): Promise<any>;

    // queryTransaction(txid: string): Promise<any>;
}

/* ---------- Contract ---------- */

export interface ContractInterface {
    createContractAccount(contractAccountName: number, address: string): Promise<any>;

    getContractAccounts(address?: string): Promise<any>;

    getContracts(target: string): Promise<any>;

    deployWasmContract(contractAccount: string, contractName: string, code: string, lang: string, initArgs: any, upgrade: boolean, account?: AccountModel, desc?: string): Promise<any>;

    deploySolidityContract(contractAccount: string, contractName: string, bin: string, abi: string, lang: string, initArgs: any, upgrade: boolean, account?: AccountModel, desc?: string): Promise<any>;

    deployNativeContract(contractAccount: string, contractName: string, code: string, lang: string, initArgs: any, upgrade: boolean, account?: AccountModel, desc?: string): Promise<any>;

    // upgradeContract(): Promise<any>;
    // imvokeContract(): Promise<any>;
}
