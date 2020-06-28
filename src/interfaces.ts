/**
 * @file Xuper SDK interfaces
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2019/12/19
 */

/* ---------- Xuper SDK ---------- */

/* ---------- Configuration ---------- */

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
    address: string;
    mnemonic?: string;
    publickKey: PublickKey;
    privateKey: PrivateKey;
}

export interface AccountInterface {
    create(): Account;
    checkAddress(): boolean;
    checkCheckMnemonic(): boolean;
}
