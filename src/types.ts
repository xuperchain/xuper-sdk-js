/**
 * @file Types
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

/* ---------- Basic ---------- */

export type Plugin = {
    name: string;
    func: Function;
}

export type Options = {
    node: string;
    chain: string;
    plugins?: Plugin[];
    enableGRPC?: boolean;
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
