/**
 * @file (contract)
 * Created by baidu on 2020/7/20
 */

import {ContractRequesttModel, ContractInfo} from './types';
import * as Requests from './requests';

export default class Contract {
    createContractAccount(contractAccountName: number, address: string): ContractRequesttModel[] {
        if (contractAccountName < 10 ** 15
            || contractAccountName >= 10 ** 16) {
            throw 'Conrtact account must be numbers of length 16';
        }

        const defaultACL = {
            pm: {
                rule: 1,
                acceptValue: 1.0
            },
            aksWeight: {
                [address]: 1.0
            }
        };

        const args = {
            account_name: btoa(contractAccountName.toString()),
            acl: btoa(JSON.stringify(defaultACL))
        };

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'NewAccount',
            args
        }];

        return invokeRequests;
    }

    async queryACL(node: string, chain: string, accountName: string, contarctInfo?: ContractInfo) {
        let body = {
            bcname: chain,
            accountName
        }

        if (contarctInfo) {
            body = {
                ...body,
                // @ts-ignore
                contractName: contarctInfo.contarctName,
                methodName: contarctInfo.contractMethod
            }
        }

        return Requests.queryACL(node, body);
    }

    contarctAccounts(node: string, chain: string, address: string) {
        const body = {
            bcname: chain,
            address
        };
        return Requests.accountList(node, body);
    }

    getContracts(node: string, chain: string, isAccount: boolean, target?: string) {
        if (isAccount) {
            const body = {
                bcname: chain,
                account: target
            };
            return Requests.accountContractList(node, body);
        }
        else {
            const body = {
                bcname: chain,
                address: target
            };
            return Requests.addressContractList(node, body);
        }
    }

    // update wasm contract requests

    // invoke contract

    deployContractRequests(
        contractAccount: string,
        contractName: string,
        code: string,
        lang: string,
        initArgs: any
    ) {
        /*
        const newInitArgs = {
            ...initArgs
        };

        const te = new TextEncoder();

        Object.keys(initArgs).forEach(key => {
            const bytes = te.encode(initArgs[key]);
            const valueBuf: Array<any> = [];
            bytes.forEach(b => valueBuf.push(String.fromCharCode(b)));
            newInitArgs[key] = btoa(valueBuf.join(''));
        });

        const desc = new Uint8Array([10, 1].concat(lang.split('').map(w => w.charCodeAt(0))));
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

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: 'Deploy',
            args: contractArgs
        }];

        return invokeRequests;

         */

        return this.generateContractRequests('Deploy', contractAccount, contractName, code, lang, initArgs);
    }

    deploySolidityContractRequests(
        contractAccount: string,
        contractName: string,
        bin: string,
        abi: string,
        lang: string,
        initArgs: any
    ) {
        return this.generateSolidityContractRequests('Deploy', contractAccount, contractName, bin, abi, lang, initArgs);
    }

    upgradeContractRequests(
        contractAccount: string,
        contractName: string,
        code: string,
        lang: string,
        initArgs: any
    ) {
        return this.generateContractRequests('Upgrade', contractAccount, contractName, code, lang, initArgs);
    }

    upgradeSolidityContractRequests(
        contractAccount: string,
        contractName: string,
        bin: string,
        abi: string,
        lang: string,
        initArgs: any
    ) {
        return this.generateSolidityContractRequests('Upgrade', contractAccount, contractName, bin, abi, lang, initArgs);
    }

    generateContractRequests(
        methodName: string,
        contractAccount: string,
        contractName: string,
        code: string,
        lang: string,
        initArgs: any
    ) {
        const newInitArgs = {
            ...initArgs
        };

        const te = new TextEncoder();

        Object.keys(initArgs).forEach(key => {
            const bytes = te.encode(initArgs[key]);
            const valueBuf: Array<any> = [];
            bytes.forEach(b => valueBuf.push(String.fromCharCode(b)));
            newInitArgs[key] = btoa(valueBuf.join(''));
        });

        const desc = new Uint8Array([10, 1].concat(lang.split('').map(w => w.charCodeAt(0))));
        const descBuf = Object.values(desc).map(n => String.fromCharCode(n));

        const args = {
            account_name: contractAccount,
            contract_code: code,
            contract_desc: descBuf.join(''),
            contract_name: contractName,
            init_args: JSON.stringify(newInitArgs)
        };

        const contractArgs = {
            ...args
        };

        Object.keys(contractArgs).forEach(key => {
            // @ts-ignore
            contractArgs[key] = btoa(contractArgs[key]);
        });

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: methodName,
            args: contractArgs
        }];

        return invokeRequests;
    }

    generateSolidityContractRequests(
        methodName: string,
        contractAccount: string,
        contractName: string,
        bin: string,
        abi: string,
        lang: string,
        initArgs: any
    ) {
        const newInitArgs = {
            // ...initArgs,
            input: JSON.stringify(initArgs),
            jsonEncoded: 'true'
        };

        const te = new TextEncoder();

        Object.keys(newInitArgs).forEach(key => {
            // @ts-ignore
            const bytes = te.encode(newInitArgs[key]);
            const valueBuf: Array<any> = [];
            bytes.forEach(b => valueBuf.push(String.fromCharCode(b)));
            // @ts-ignore
            newInitArgs[key] = btoa(valueBuf.join(''));
        });

        const desc = new Uint8Array([42, 3].concat(lang.split('').map(w => w.charCodeAt(0))));

        // const desc = lang.split('').map(w => w.charCodeAt(0));
        const descBuf = Object.values(desc).map(n => String.fromCharCode(n));

        const args = {
            account_name: contractAccount,
            contract_abi: abi,
            contract_code: bin,
            contract_desc: descBuf.join(''),
            contract_name: contractName,
            init_args: JSON.stringify(newInitArgs)
        };

        const contractArgs = {
            ...args
        };

        Object.keys(contractArgs).forEach(key => {
            // @ts-ignore
            contractArgs[key] = btoa(contractArgs[key]);
        });

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: 'xkernel',
            method_name: methodName,
            args: contractArgs
        }];

        return invokeRequests;
    }

    invokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any,
        amount: string
    ): ContractRequesttModel[] {

        const newArgs = {
            ...args
        };

        const te = new TextEncoder();

        Object.keys(args).forEach(key => {
            const bytes = te.encode(args[key]);
            const valueBuf: Array<any> = [];
            bytes.forEach(b => valueBuf.push(String.fromCharCode(b)));
            newArgs[key] = btoa(valueBuf.join(''));
        });

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: moduleName,
            method_name: methodName,
            contract_name: contractName,
            args: newArgs,
            amount
        }];

        return invokeRequests;
    }

    invokeSolidityContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any,
        amount: string
    ): ContractRequesttModel[] {

        const newArgs = {
            input: JSON.stringify(args),
            jsonEncoded: 'true'
        };

        const te = new TextEncoder();

        Object.keys(newArgs).forEach(key => {
            // @ts-ignore
            const bytes = te.encode(newArgs[key]);
            const valueBuf: Array<any> = [];
            bytes.forEach(b => valueBuf.push(String.fromCharCode(b)));
            // @ts-ignore
            newArgs[key] = btoa(valueBuf.join(''));
        });

        const invokeRequests: ContractRequesttModel[] = [{
            module_name: moduleName,
            method_name: methodName,
            contract_name: contractName,
            args: newArgs,
            amount
        }];

        return invokeRequests;
    }
}
