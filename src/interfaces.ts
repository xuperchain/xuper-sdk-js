/**
 * @file Interfaces
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2019/12/19
 */

/* ---------- Xuper SDK ---------- */

import {Cryptography, Language, Strength} from './constants';

import {AccountModel, TransactionModel} from './types';

export default interface XuperSDKInterface extends AccountInterface, TransactionInterface, ContractInterface
{
    checkStatus(): Promise<any>;
    txidToHex(txid: string): string;
}

/* ---------- Account ---------- */

export interface AccountInterface {
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;

    recover(mnemonic: string, language: Language, cryptography: Cryptography, cache?: boolean): AccountModel;
    import(password: string, privateKeyStr: string, cache?: boolean): AccountModel;

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
    // deployContract(): Promise<any>;
    // upgradeContract(): Promise<any>;
    // imvokeContract(): Promise<any>;
    // contractList(): Promise<any>;
}
