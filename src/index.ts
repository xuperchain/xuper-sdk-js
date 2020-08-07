/**
 * @file Xuper SDK
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import XuperSDKInterface from './interfaces';
import * as Requests from './requests';
import Errors, {XuperError} from './error';
import {Cryptography, Language, Strength} from './constants';
import {toHex} from './utils';
import Account from './account';
import Transaction from './transaction';
import Contract from './Contract';
import {
    Options,
    AccountModel,
    TransactionInfomationModel,
    TransactionModel,
    AuthModel,
    Plugin, ContractRequesttModel
} from './types';
import BN from 'bn.js';

export default class XuperSDK implements XuperSDKInterface {
    static instance: XuperSDK;
    private options: Options;
    private plugins: Plugin[];
    private accountInstance: Account;
    private transactionInstance: Transaction;
    private contractInstance: Contract;
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
        this.contractInstance = new Contract();
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
            throw Errors.PARAMETER_ERROR;
        }
    }

    import(password: string, privateKeyStr: string, cache = false): AccountModel {
        if (!password || !privateKeyStr) {
            throw Errors.PARAMETER_ERROR;
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
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
        }
    }

    checkMnemonic(mnemonic: string, language: Language): boolean {
        if (mnemonic || language) {
            return this.accountInstance.checkMnemonic(mnemonic, language);
        }
        else {
            throw Errors.PARAMETER_ERROR;
        }
    }

    getBalance(address?: string): Promise<any> {
        const {node, chain} = this.options;
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.getBalance(addr, node, chain);
        } else {
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
        }
    }

    getBalanceDetail(address?: string): Promise<any> {
        const {node, chain} = this.options;
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.getBalanceDetail(addr, node, chain);
        } else {
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
        }
    }

    async transfer(ti: TransactionInfomationModel, account?: AccountModel): Promise<TransactionModel> {
        const {node, chain} = this.options;
        let authRequires: { [propName: string]: AuthModel} = {};

        if (this.plugins.length > 0 && this.plugins.every(plugin => plugin.hookFuncs.indexOf('transfer') > -1)) {
            for (const plugin of this.plugins) {
                authRequires = {...await plugin.func['transfer'](plugin.args['transfer'], chain)};
            }
        }

        const acc = account || this.account;

        if (!acc) {
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
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
        const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(node, chain, acc.address, totalNeed, Object.keys(authRequires), null, acc)
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        return this.transactionInstance.makeTransaction(acc, ti, authRequires, preExecWithUtxosObj);
    }

    async postTransaction(tx: TransactionModel, account?: AccountModel) {
        const acc = account || this.account;
        const {node, chain} = this.options;
        if (acc) {
            return this.transactionInstance.post(node, chain, tx, acc);
        }
        else {
            throw 'err'
        }
    }

    async queryTransaction(txid: string): Promise<any> {
        const {node, chain} = this.options;
        return this.transactionInstance.queryTransaction(node, chain, txid);
    }

    async createContractAccount(contractAccountName: number, address? : string): Promise<any> {
        const addr = address || this.account?.address;

        if (addr) {
            const contractRequest = this.contractInstance.createContractAccount(contractAccountName, addr);
            return this.invoke(contractRequest);
        }
        else {
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
        }

        // auth requires
        // amount

        // const preExecWithUtxos = this.transactionInstance.preExecWithUTXO(
        //     totalNeed, Object.keys(authRequires), invokeRequests
        // );

    }


    // Todo: fix
    async invoke(
        invokeRequests: ContractRequesttModel[],
        account?: AccountModel,
    ): Promise<any> {

        const {node, chain} = this.options;

        const acc = account || this.account;

        if (!acc) {
            throw XuperError.or([Errors.ACCOUNT_NOT_EXIST, Errors.PARAMETER_ERROR]);
        }

        let authRequires: { [propName: string]: AuthModel} = {};

        if (this.plugins.length > 0 && this.plugins.every(item => item.hookFuncs.indexOf('transfer') > -1)) {
            for (const plugin of this.plugins) {
                authRequires = {...await plugin.func['transfer'](plugin.args['transfer'], chain)};
            }
        }

        let totalNeed = new BN(0);

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(
            node, chain, acc.address,
            totalNeed, Object.keys(authRequires), invokeRequests
        );

        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;

        const tx = await this.transactionInstance.makeTransaction(acc, {
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);

        return {
            preExecutionTransaction: preExecWithUtxosObj,
            transaction: tx
        };
    }

    getContracts(target: string): Promise<any> {
        const {node, chain} = this.options;
        return this.contractInstance.getContracts(node, chain,
            !this.accountInstance.checkAddress(target), target);
    }

    getContractAccounts(address?: string): Promise<any> {
        const {node, chain} = this.options;
        const addr = address || this.account?.address;
        if (addr) {
            return this.contractInstance.contarctAccounts(node, chain, addr);
        }
        else {
            throw Errors.PARAMETER_EMPTY_FUNC('address');
        }
    }

    async deployWasmContract(
        contractAccount: string,
        contractName: string,
        code: string,
        lang: string,
        initArgs: any,
        account?: AccountModel
    ): Promise<any> {
        const {node, chain} = this.options;
        const invokeRequests = this.contractInstance.deployWasmContractRequests(
            contractAccount,
            contractName,
            code,
            lang,
            initArgs
        );

        if (!account) {
            account = this.account;
        }

        if (!account) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        const address = account.address;

        const authRequires: { [propName: string]: AuthModel } = {
            [`${contractAccount}/${address}`]: {
                fee: 0,
                sign: async (_checkTx: TransactionModel, tx: TransactionModel): Promise<TransactionModel> => {
                    if (!tx.authRequireSigns) {
                        tx.authRequireSigns = [];
                    }
                    tx.authRequireSigns = tx.authRequireSigns.concat(tx.initiatorSigns);
                    return tx;
                }
            }
        };
        let totalNeed = new BN(0);
        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(node, chain, address, totalNeed, Object.keys(authRequires), invokeRequests, )
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        // return new Promise<any>(resolve => resolve(preExecWithUtxosObj));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;

        const tx = await this.transactionInstance.makeTransaction(account, {
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);

        return {
            preExecutionTransaction: preExecWithUtxosObj,
            transaction: tx
        };
    }

    async invokeContarct(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any,
        address: string
    ): Promise<any> {
        const {node, chain} = this.options;
        const invokeRequests = this.contractInstance.invokeContract(
            contractName,
            methodName,
            moduleName,
            args
        )

        const authRequires: { [propName: string]: AuthModel } = {};
        let totalNeed = new BN(0);

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.transactionInstance.preExecWithUTXO(node, chain, address, totalNeed, Object.keys(authRequires), invokeRequests, )
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        return new Promise<any>(resolve => resolve(preExecWithUtxosObj));
    }

    transactionIdToHex(t: Required<string>): string {
        if (!t) {
            throw Errors.PARAMETER_EMPTY_FUNC();
        }

        try {
            return toHex(t.toString());
        }
        catch (err) {
            throw err;
        }
    }
}
