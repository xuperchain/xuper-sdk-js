/**
 * @file (contract)
 * Created by baidu on 2020/7/20
 */

import {ContractRequesttModel} from './types';
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

    upgradContractRequests(
        contractAccount: string,
        contractName: string,
        code: string,
        lang: string,
        initArgs: any
    ) {
        return this.generateContractRequests('Upgrade', contractAccount, contractName, code, lang, initArgs);
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
            method_name: methodName,
            args: contractArgs
        }];

        return invokeRequests;
    }

    invokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
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
            args: newArgs
        }];

        return invokeRequests;
    }
}
