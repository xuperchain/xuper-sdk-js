/**
 * @file Interfaces
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2019/12/19
 */

/* ---------- Xuper SDK ---------- */

import {Cryptography, Language, Strength} from './constants';

import {AccountModel} from './types';

export default interface XuperSDKInterface extends AccountInterface
// TransactionInterface, ContractInterface
{
    checkStatus(): Promise<any>;
}

/* ---------- Configuration ---------- */

/* ---------- Transaction ---------- */

export interface TransactionInterface {
    preExec(): Promise<any>;
    preExecWithUTXO(): Promise<any>;
    makeTransaction(): Promise<any>;
    postTransaction(): Promise<any>;
    queryTransaction(): Promise<any>;
}

export interface AccountInterface {
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel;
    recover(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel
    import(password: string, privateKeyStr: string): AccountModel;

    checkAddress(address?: string): boolean;

    // checkCheckMnemonic(): boolean;
    // getBalanceDetail(address?: string): Promise<any>;
    // getBalance(address?: string): Promise<any>;
}

/* ---------- Contract ---------- */

export interface ContractInterface {
    createContractAccount(): Promise<any>;
    deployContract(): Promise<any>;
    imvokeContract(): Promise<any>;
    contractList(): Promise<any>;
}
