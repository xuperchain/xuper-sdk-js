/**
 * @file Xuper SDK
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import XuperSDKInterface from './interfaces';
import * as Requests from './requests';
import XuperErrors, {XuperError} from './error';
import Account from './account';
import Transaction from './transaction';
import {Cryptography, Language, Strength} from './constants';
import {Options, AccountModel, TransactionInfomationModel, TransactionModel, AuthModel, Plugin} from './types';
import BN from 'bn.js';
import {txidToHex} from './utils';

export default class XuperSDK implements XuperSDKInterface {
    static instance: XuperSDK;
    private options: Options;
    private plugins: Plugin[];
    private accountInstance: Account;
    private transactionInstance: Transaction;
    private account?: AccountModel;

    public static getInstance(opts: Options): XuperSDK {
        if (!this.instance) {
            this.instance = new this(opts);
        }
        return this.instance;
    }

    constructor(opts: Options) {
        this.options = {...opts};
        this.plugins = opts.plugins || [];
        this.accountInstance = new Account();
        this.transactionInstance = new Transaction(opts.plugins);
    }

    checkStatus(): Promise<any> {
        const node = this.options.node;
        const body = {
            bcname: this.options.chain
        };
        return Requests.getStatus(node, body);
    }

    create(
        language: Language = Language.SimplifiedChinese,
        strength: Strength = Strength.Easy,
        cryptography: Cryptography = Cryptography.EccFIPS
    ): AccountModel {
        return this.accountInstance.create(language, strength, cryptography);
    }

    recover(
        mnemonic: string,
        language: Language = Language.SimplifiedChinese,
        cryptography: Cryptography = Cryptography.EccFIPS,
        cache = false
    ): AccountModel {
        if (mnemonic) {
            const account = this.accountInstance.recover(mnemonic, language, cryptography);
            if (cache) {
                this.account = account;
                return account;
            } else {
                return account;
            }
        } else {
            throw XuperErrors.PARAMETER_ERROR;
        }
    }

    import(password: string, privateKeyStr: string, cache = false): AccountModel {
        if (!password || !privateKeyStr) {
            throw XuperErrors.PARAMETER_ERROR;
        }
        const account = this.accountInstance.import(password, privateKeyStr);
        if (cache) {
            this.account = account;
            return account;
        } else {
            return account;
        }
    }

    checkAddress(address?: string): boolean {
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.checkAddress(addr);
        } else {
            throw XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]);
        }
    }

    checkMnemonic(mnemonic: string, language: Language): boolean {
        if (mnemonic || language) {
            return this.accountInstance.checkMnemonic(mnemonic, language);
        }
        else {
            throw XuperErrors.PARAMETER_ERROR;
        }
    }

    getBalance(address?: string): Promise<any> {
        const {node, chain} = this.options;
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.getBalance(addr, node, chain);
        } else {
            throw XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]);
        }
    }

    getBalanceDetail(address?: string): Promise<any> {
        const {node, chain} = this.options;
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.getBalanceDetail(addr, node, chain);
        } else {
            throw XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]);
        }
    }

    async transfer(ti: TransactionInfomationModel, account?: AccountModel): Promise<TransactionModel> {
        // Todo: check ti

        const {node, chain} = this.options;
        let authRequires: { [propName: string]: AuthModel} = {};

        if (this.plugins.length > 0 && this.plugins.every(item => item.hookFuncs.indexOf('transfer') > -1)) {
            for (const plugin of this.plugins) {
                authRequires = {...await plugin.func['transfer'](plugin.args['transfer'], chain)};
            }
        }

        const acc = account || this.account;

        if (!acc) {
            throw XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]);
        }

        const {amount, fee} = ti;

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN(amount));
        totalNeed = totalNeed.add(new BN(fee));

        // @ts-ignore
        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        // @ts-ignore
        const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(node, chain, acc.address, totalNeed, Object.keys(authRequires))

        console.warn(preExecWithUtxos);
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        return this.transactionInstance.makeTransaction(acc, ti, authRequires, preExecWithUtxosObj);
    }

    async postTransaction(tx: TransactionModel) {
        const {node, chain} = this.options;
        return this.transactionInstance.post(node, chain, tx);
    }

    async queryTransaction(txid: string): Promise<any> {
        const {node, chain} = this.options;
        return this.transactionInstance.queryTransaction(node, chain, txid);
    }

    txidToHex(txid: Required<string>): string {
        return txidToHex(txid);
    }

    // async generateTransaction(ti: TransactionInfomationModel): Promise<any> {
    //
    //     const authRequires: {[propName: string]: AuthModel} = {};
    //
    //     const {amount, fee} = ti;
    //
    //     let totalNeed = new BN(0);
    //
    //     totalNeed = totalNeed.add(new BN(amount));
    //     totalNeed = totalNeed.add(new BN(fee));
    //
    //     Object.keys(authRequires).forEach((key: string) => {
    //         const auth = authRequires[key];
    //         totalNeed = totalNeed.add(new BN(auth.fee || 0));
    //     });

    // const tx = await this.transactionInstance.generateTransaction(totalNeed, Object.keys(authRequires));

    // const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(totalNeed, Object.keys(authRequires));
    /*
    const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

    return this.makeTransaction(ti, authRequires, preExecWithUtxosObj);

     */


    // }
}
