/**
 * @file Xuper SDK
 * Created by xinyi on 2019/12/19
 */

import BN from 'bn.js';

import {
    Language, Strength, Cryptography
} from './constants';

import {
    publicOrPrivateKeyToString, postRequest, convert, txidToHex
} from './utils';

import {
    XuperSDKInterface, AccountModel, XuperOptions, PrivateKeyModel,
    PublicKeyModel, ContracRequesttModel, Transaction, TransactionInfomation,
    UTXO, TXOutput, AuthInterface
} from './interfaces';

import Errors from './error';
import Account from './account';
import generateTransaction, {signTx} from './transaction';

export default class XuperSDK implements XuperSDKInterface {
    static instance: XuperSDK;

    accountIns: Account;

    accountModel?: AccountModel;

    options: XuperOptions;

    preExecServer?: string;

    defaultRequire: { [propName: string]: AuthInterface } = {};

    public static getInstance(opts: XuperOptions): XuperSDK {
        if (!this.instance) {
            this.instance = new this(opts);
        }
        return this.instance;
    }

    /**
     * Constructor
     * @param opts
     */
    constructor(opts: XuperOptions) {
        this.options = {...opts};
        this.accountIns = new Account();
        if (opts.needDefaultEndorse && opts.defaultEndorseConf) {
            const {fee: endorseFee, endorseServiceCheckAddr, server} = opts.defaultEndorseConf;
            this.defaultRequire[endorseServiceCheckAddr] = {
                fee: endorseFee,
                sign: async (checkTx: Transaction, tx: Transaction): Promise<Transaction> => {
                    const obj = {
                        bcname: this.options.chain,
                        tx: convert(tx)
                    };

                    const body = {
                        RequestName: 'ComplianceCheck',
                        BcName: 'xuper',
                        Fee: convert(checkTx),
                        RequestData: btoa(JSON.stringify(obj))
                    };

                    const tar = `${server}/v1/endorsercall`;

                    return postRequest(tar, body)
                        .then((result: any) => {
                            if (!tx.authRequireSigns) {
                                tx.authRequireSigns = [];
                            }
                            tx.authRequireSigns.push(result.EndorserSign);
                            return tx;
                        });
                }
            };
        }
    }

    /**
     * Create new account
     * @param language
     * @param strength - easy: 12, middle: 16，hard: 24
     * @param cryptography - EccFIPS
     */
    createAccount(language: Language, strength: Strength, cryptography: Cryptography): AccountModel {
        const model = this.accountIns.create(language, strength, cryptography);
        this.accountModel = model;
        return model;
    }

    /**
     * Recover account with mnemonic
     * @param mnemonic
     * @param language - easy: 12, middle: 16，hard: 24
     * @param cryptography - EccFIPS
     */
    revertAccount(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel {
        const model = this.accountIns.revert(mnemonic, language, cryptography);
        this.accountModel = model;
        return model;
    }

    txidToHex(txid: string): string {
        return txidToHex(txid);
    }

    /**
     * Import private key
     * @param password
     * @param privateKeyStr
     */
    importAccout(password: string, privateKeyStr: string): AccountModel {
        const model = this.accountIns.import(password, privateKeyStr);
        this.accountModel = model;
        return model;
    }

    /**
     * Export encryptd private string
     * @param password
     */
    exportAccount(password: string): string {
        if (!this.accountModel || !this.accountModel.privateKey) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }
        return btoa(
            this.accountIns.encryptPrivateKey(password, this.accountModel.privateKey)
        );
    }

    /**
     * Check address valid
     * @param address
     */
    checkAddress(address: string): boolean {
        return this.accountIns.checkAddress(address);
    }

    /**
     * Check mnemonic valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean {
        return this.accountIns.checkMnemonic(mnemonic, language);
    }

    /**
     * Local account balance or target address
     * @param address
     */
    getBalance(address?: string): Promise<any> {
        if (!address && !this.accountModel) {
            throw 'No account information or target address';
        }

        console.warn(this.options.node);

        return fetch(`${this.options.node}/v1/get_balance`, {
            method: 'POST',
            body: JSON.stringify({
                address: address || this.accountModel!.address,
                bcs: [{
                    bcname: this.options.chain
                }]
            })
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    /**
     * Local account balance detail or target address detail
     * @param address
     */
    getBalanceDetail(address?: string): Promise<any> {
        if (!address && !this.accountModel) {
            throw 'No account information or target address';
        }

        return fetch(`${this.options.node}/v1/get_balance_detail`, {
            method: 'POST',
            body: JSON.stringify({
                address: address || this.accountModel!.address,
                tfds: [{
                    bcname: this.options.chain
                }]
            })
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    /**
     * Key to string
     * @param key
     */
    publicOrPrivateKeyToString(key: PrivateKeyModel | PublicKeyModel): string {
        return publicOrPrivateKeyToString(key);
    }

    async preExecTransactionWithUTXO(
        sum: string | number | BN,
        authRequire: string[] = [],
        invokeRequests: ContracRequesttModel[] = []
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const bnSum = new BN(sum);

        const data: any = {
            bcname: this.options.chain,
            address: this.accountModel.address,
            totalAmount: bnSum.toNumber(),
            request: {
                initiator: this.accountModel.address,
                bcname: this.options.chain,
                auth_require: authRequire,
                requests: invokeRequests
            }
        };

        const body = {
            RequestName: 'PreExecWithFee',
            BcName: this.options.chain,
            RequestData: btoa(JSON.stringify(data))
        };

        return postRequest(`${this.options.preExecServer}/v1/endorsercall`, body);
    }

    async preExecTransaction(
        sum: string | number | BN,
        authRequire: string[] = [],
        invokeRequests: ContracRequesttModel[] = []
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const bnSum = new BN(sum);

        const data: any = {
            // bcname: this.options.chain,
            // address: this.accountModel.address,
            // totalAmount: bnSum.toNumber(),
            request: {
                initiator: this.accountModel.address,
                bcname: this.options.chain,
                auth_require: authRequire,
                requests: invokeRequests
            }
        };

        const body = {
            initiator: this.accountModel.address,
            bcname: this.options.chain,
            auth_require: authRequire,
            requests: invokeRequests
        };


        return fetch(`${this.options.node}/v1/preexec`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );

        // return postRequest(`${this.options.preExecServer}/v1/endorsercall`, body);
    }

    /**
     * Generate simple transaction
     * @param ti
     */
    async generateTransaction(ti: TransactionInfomation): Promise<Transaction> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const authRequires: { [propName: string]: AuthInterface } = {...this.defaultRequire};

        const {amount, fee} = ti;

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN(amount));
        totalNeed = totalNeed.add(new BN(fee));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(totalNeed, Object.keys(authRequires));
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));

        return this.makeTransaction(ti, authRequires, preExecWithUtxosObj);
    }

    /**
     * Make new transaction
     * @param ti
     * @param authRequires
     * @param preExecWithUtxosObj
     */
    private async makeTransaction(
        ti: TransactionInfomation,
        authRequires: {[propName: string]: AuthInterface},
        preExecWithUtxosObj: any
    ): Promise<Transaction> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const account = this.accountModel;

        let newPreExecWithUtxosObj = {...preExecWithUtxosObj};

        let tx: Transaction;

        if (this.options.needDefaultEndorse) {
            const {fee: endorseFee, endorseServiceFeeAddr} = this.options.defaultEndorseConf!;

            const {utxoOutput} = preExecWithUtxosObj;

            const checkTx = await generateTransaction(
                this.accountModel, {utxoOutput}, [], {amount: endorseFee, fee: 0, to: endorseServiceFeeAddr}
            );

            let totalSelected: number[] = [];
            const utxoList: UTXO[] = [];

            checkTx.txOutputs.forEach((
                txOutput: TXOutput, index: number
            ) => {
                // @ts-ignore
                if (txOutput.toAddr === btoa(this.accountModel.address)) {
                    const utxo: UTXO = {
                        amount: txOutput.amount,
                        toAddr: txOutput.toAddr,
                        refTxid: checkTx.txid!,
                        refOffset: index
                    };
                    utxoList.push(utxo);
                    totalSelected = atob(utxo.amount).split('').map(w => w.charCodeAt(0));
                }
            });

            const newUtxoOutput = {
                utxoList,
                totalSelected
            };

            newPreExecWithUtxosObj = {...newPreExecWithUtxosObj, utxoOutput: newUtxoOutput};

            tx = generateTransaction(
                account,
                newPreExecWithUtxosObj,
                Object.keys(authRequires),
                ti
            );

            // @ts-ignore
            tx = await Object.keys(authRequires).reduce(async (prov: any, cur: any): Promise<any> => {
                if (prov) {
                    tx = prov;
                }
                const auth = authRequires[cur];
                return auth.sign(checkTx, await tx);
            }, 0);
        } else {
            tx = generateTransaction(
                account,
                newPreExecWithUtxosObj,
                Object.keys(authRequires),
                ti
            );

            // @ts-ignore
            await Object.keys(authRequires).reduce(async (prov: any, cur: any): Promise<any> => {
                const auth = authRequires[cur];
                tx = await auth.sign(null, await tx);
                return tx;
            }, 0);
        }

        return convert(signTx(tx));
    }

    /**
     * Post transaction
     * @param tx
     */
    async postTransaction(tx: any): Promise<any> {
        const tmp = {
            bcname: 'xuper',
            status: 4,
            tx,
            txid: tx.txid
        };

        return fetch(`${this.options.node}/v1/post_tx`, {
            method: 'POST',
            body: JSON.stringify(tmp)
        }).then(response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        });
    }

    /**
     * Query transaction id
     * @param txid
     */
    async queryTransaction(txid: string): Promise<any> {
        const tmp = {
            bcname: 'xuper',
            txid
        };

        return fetch(`${this.options.node}/v1/query_tx`, {
            method: 'POST',
            body: JSON.stringify(tmp)
        }).then(response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        });
    }

    /**
     * Invoke contract
     * @param contractName
     * @param methodName
     * @param moduleName
     * @param args
     */
    async invokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: moduleName,
            method_name: methodName,
            contract_name: contractName,
            args
        }];

        const authRequires: {[propName: string]: AuthInterface} = {...this.defaultRequire};

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN('0'));
        totalNeed = totalNeed.add(new BN('0'));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(
            totalNeed, Object.keys(authRequires), invokeRequests
        );
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.makeTransaction({
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);
        return this.postTransaction(tx);
    }

    /**
     * Invoke contract
     * @param contractName
     * @param methodName
     * @param moduleName
     * @param args
     */
    async simpleInvokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
    ): Promise<any> {
        if (!this.accountModel) {
            throw 'No account information';
        }

        if (this.options.needDefaultEndorse
            && !this.options.defaultEndorseConf) {
            throw Errors.INVALID_CONFIGURATION;
        }

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: moduleName,
            method_name: methodName,
            contract_name: contractName,
            args
        }];

        const authRequires: {[propName: string]: AuthInterface} = {...this.defaultRequire};

        let totalNeed = new BN(0);

        // totalNeed = totalNeed.add(new BN('0'));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(
            totalNeed, Object.keys(authRequires), invokeRequests
        );
        // return {
        //     preExec: JSON.parse(atob(preExecWithUtxos.ResponseData)),
        //     authRequires
        // };

        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.makeTransaction({
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);

        console.log(preExecWithUtxosObj);

        return {
            preExecutionTransaction: preExecWithUtxosObj,
            transaction: tx
        };

        // const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        // const tx = await this.makeTransaction({
        //     amount: '0',
        //     fee: gasUsed.toString(),
        //     to: ''
        // }, authRequires, preExecWithUtxosObj);
        // return this.postTransaction(tx);
    }

    /**
     * Create contract account
     * @param contractAccountName
     */
    async createContractAccount(contractAccountName: number) {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        if (contractAccountName < 10 ** 15
            || contractAccountName >= 10 ** 16) {
            throw 'Conrtact account must be numbers of length 16';
        }

        // const prefixes = 'XC';
        // const contractAccount = `${prefixes}${contractAccountName}@${this.options.chain}`;

        const defaultACL = {
            pm: {
                rule: 1,
                acceptValue: 1.0
            },
            aksWeight: {
                [this.accountModel.address]: 1.0
            }
        };

        const args = {
            account_name: btoa(contractAccountName.toString()),
            acl: btoa(JSON.stringify(defaultACL))
        };

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'NewAccount',
            args
        }];

        const authRequires: {[propName: string]: AuthInterface} = {...this.defaultRequire};

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN('0'));
        totalNeed = totalNeed.add(new BN('0'));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(
            totalNeed, Object.keys(authRequires), invokeRequests
        );
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.makeTransaction({
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);
        return this.postTransaction(tx);
    }

    async contractList(account: string) {

        const body = {
            bcname: this.options.chain,
            account
        };

        return fetch(`${this.options.node}/v1/get_account_contracts`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(
            response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw res;
                    });
                }
                return response.json();
            }
        );
    }

    async simpleDeployWasmContract(
        contractAccount: string,
        contractName: string,
        code: string,
        runtime: string,
        initArgs: any
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        const newInitArgs = {
            ...initArgs
        };

        Object.keys(initArgs).forEach(key => {
            newInitArgs[key] = btoa(initArgs[key]);
        });

        const desc = new Uint8Array([10, 1].concat(runtime.split('').map(w => w.charCodeAt(0))));
        const descBuf = Object.values(desc).map(n => String.fromCharCode(n));

        const args = {
            account_name: contractAccount,
            contract_name: contractName,
            contract_desc: descBuf.join(''),
            contract_code: code,
            init_args: JSON.stringify(newInitArgs)
        };

        const contractArgs = {
            ...args
        };

        Object.keys(contractArgs).forEach(key => {
            // @ts-ignore
            contractArgs[key] = btoa(contractArgs[key]);
        });

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'Deploy',
            args: contractArgs
        }];

        const authRequires: { [propName: string]: AuthInterface } = {
            ...this.defaultRequire,
            [`${contractAccount}/${this.accountModel.address}`]: {
                fee: 0,
                sign: (checkTx: Transaction, tx: Transaction) => {
                    if (!tx.authRequireSigns) {
                        tx.authRequireSigns = [];
                    }
                    tx.authRequireSigns = tx.authRequireSigns.concat(tx.initiatorSigns);
                    return tx;
                }
            }
        };

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN('0'));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(
            totalNeed, Object.keys(authRequires), invokeRequests
        );

        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.makeTransaction({
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);

        return {
            preExecutionTransaction: preExecWithUtxosObj,
            transaction: tx
        };

        // const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        // const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
    }

    /**
     * Deploy wasm contract
     * @param contractAccount
     * @param contractName
     * @param code
     * @param runtime
     * @param initArgs
     */
    async deployWasmContract(
        contractAccount: string,
        contractName: string,
        code: string,
        runtime: string,
        initArgs: any
    ): Promise<any> {
        if (!this.accountModel) {
            throw Errors.ACCOUNT_NOT_EXIST;
        }

        const newInitArgs = {
            ...initArgs
        };

        Object.keys(initArgs).forEach(key => {
            newInitArgs[key] = btoa(initArgs[key]);
        });

        const desc = new Uint8Array([10, 1].concat(runtime.split('').map(w => w.charCodeAt(0))));
        const descBuf = Object.values(desc).map(n => String.fromCharCode(n));

        const args = {
            account_name: contractAccount,
            contract_name: contractName,
            contract_desc: descBuf.join(''),
            contract_code: code,
            init_args: JSON.stringify(newInitArgs)
        };

        const contractArgs = {
            ...args
        };

        Object.keys(contractArgs).forEach(key => {
            // @ts-ignore
            contractArgs[key] = btoa(contractArgs[key]);
        });

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'Deploy',
            args: contractArgs
        }];

        const authRequires: { [propName: string]: AuthInterface } = {
            ...this.defaultRequire,
            [`${contractAccount}/${this.accountModel.address}`]: {
                fee: 0,
                sign: (checkTx: Transaction, tx: Transaction) => {
                    if (!tx.authRequireSigns) {
                        tx.authRequireSigns = [];
                    }
                    tx.authRequireSigns = tx.authRequireSigns.concat(tx.initiatorSigns);
                    return tx;
                }
            }
        };

        let totalNeed = new BN(0);

        totalNeed = totalNeed.add(new BN('0'));

        Object.keys(authRequires).forEach((key: string) => {
            const auth = authRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

        const preExecWithUtxos = await this.preExecTransactionWithUTXO(
            totalNeed, Object.keys(authRequires), invokeRequests
        );
        const preExecWithUtxosObj = JSON.parse(atob(preExecWithUtxos.ResponseData));
        const gasUsed = preExecWithUtxosObj.response.gas_used || 0;
        const tx = await this.makeTransaction({
            amount: '0',
            fee: gasUsed.toString(),
            to: ''
        }, authRequires, preExecWithUtxosObj);
        return this.postTransaction(tx);
    }
}

export {Language, Strength, Cryptography} from './constants';
