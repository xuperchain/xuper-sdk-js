/**
 * @file Interfaces
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2019/12/19
 */

/* ---------- Xuper SDK ---------- */

export interface XuperSDKInterface
// extends
// AccountInterface, TransactionInterface, ContractInterface
{
    getBalance(address?: string): Promise<any>;
    // getBalanceDetail(address?: string): Promise<any>;
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

/* ---------- Account ---------- */

export interface PublickKey {
    X: string;
    Y: string;
    Curvname: string;
}

export interface PrivateKey extends PublickKey {
    D: string;
}

export interface Account {
    publickKey: PublickKey;
    privateKey: PrivateKey;
    mnemonic?: string;
    address: string;
}

export interface AccountInterface {
    create(): Account;
    recover(): Account;
    import(): boolean;
    export(): boolean;
    checkAddress(): boolean;
    checkCheckMnemonic(): boolean;
}

/* ---------- Contract ---------- */

export interface ContractInterface {
    createContractAccount(): Promise<any>;
    deployContract(): Promise<any>;
    imvokeContract(): Promise<any>;
    contractList(): Promise<any>;
}
