import {ContractRequesttModel} from './types';

/**
 * @file (contract)
 * Created by baidu on 2020/7/20
 */

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

        /*
        const newAuthRequires: { [propName: string]: AuthModel } = {...authRequires};

        let totalNeed = new BN(0);

        Object.keys(authRequires).forEach((key: string) => {
            const auth = newAuthRequires[key];
            totalNeed = totalNeed.add(new BN(auth.fee || 0));
        });

         */

        /*

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

         */
    }

    /*
    async simpleInvokeContract(
        contractName: string,
        methodName: string,
        moduleName: string,
        args: any
    ): Promise<any> {
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

        const invokeRequests: ContracRequesttModel[] = [{
            module_name: moduleName,
            method_name: methodName,
            contract_name: contractName,
            args: newArgs
        }];

        console.log(invokeRequests);

        const authRequires: { [propName: string]: AuthInterface } = {...this.defaultRequire};

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
    }

     */
}
