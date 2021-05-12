jest.setTimeout(100000000);

import XuperSDK, {Cryptography, Language} from '../src';
import {isBrowser} from '../src/utils';

isBrowser && require('whatwg-fetch');

const
    node = process.env.SERVER!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    address = process.env.TEST_ADDRESS!;

describe('Xuper SDK Contract：', () => {

    const num = 2222222222222222;
    const contractAccount = `XC${num}@xuper`;
    const wasmName = 'counter666';
    const solidityName = 'counter888';

    test('create an new contact account', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        try {
            const demo = await xsdk.createContractAccount(num);
            await xsdk.postTransaction(demo.transaction);
        }
        catch (err) {}

        const execStruct = await xsdk.createContractAccount(
            parseInt('1234567890' + (~~(Math.random() * (999999 - 100000) + 100000).toString()))
        );
        const result = await xsdk.postTransaction(execStruct.transaction);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('get the address contract accounts should return contarct account list', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const result = await xsdk.getContractAccounts();
        expect(result.header).toHaveProperty('logid');
        expect(result).toHaveProperty('bcname');
        expect(result).toHaveProperty('account');
    });

    test('get the contract list of current account should return contracts', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const result = await xsdk.getContracts(address);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
        expect(result).toHaveProperty('contracts');
    });

    test('deploy native contract', async () => {
        console.log("node:",node)
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const codeBuf: string[] = [];

        if (isBrowser) {
            // @ts-ignore
            window.file.forEach(n => codeBuf.push(String.fromCharCode(n)));
        } else {
            const fs = require('fs');
            const native = Uint8Array.from(fs.readFileSync(`${__dirname}/native/counter-native`));
            native.forEach(n => codeBuf.push(String.fromCharCode(n)));
        }

        // const contractName = `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`;
        const contractName = 'counter123';
        console.log("合约名字：",contractName)
        console.log("合约账户：",contractAccount)

        try {
            console.log("预执行")
            const {transaction, preExecutionTransaction} = await xsdk.deployNativeContract(
                contractAccount,
                contractName,
                codeBuf.join(''),
                'go', {
                    creator: address
                }
            );
            console.log("预执行结束")

            console.log("preExecutionTransaction",preExecutionTransaction)
    
            // expect(transaction).toBeTruthy();
            // expect(preExecutionTransaction).toBeTruthy();
            console.log("POST Tx")
            const result = await xsdk.postTransaction(transaction);
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }

    });

    test('upgrade native contract', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const codeBuf: string[] = [];

        if (isBrowser) {
            // @ts-ignore
            window.file.forEach(n => codeBuf.push(String.fromCharCode(n)));
        } else {
            const fs = require('fs');
            const native = Uint8Array.from(fs.readFileSync(`${__dirname}/native/counter-native-v2`));
            native.forEach(n => codeBuf.push(String.fromCharCode(n)));
        }

        // const contractName = `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`;
        const contractName = 'counter123';
        console.log("合约名字：",contractName)
        console.log("合约账户：",contractAccount)

        try {
            const {transaction, preExecutionTransaction} = await xsdk.deployNativeContract(
                contractAccount,
                contractName,
                codeBuf.join(''),
                'go', {
                    creator: address
                },
                true
            );

            console.log("preExecutionTransaction",preExecutionTransaction)
    
            // expect(transaction).toBeTruthy();
            // expect(preExecutionTransaction).toBeTruthy();
            const result = await xsdk.postTransaction(transaction);
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    });

    test('invoke native contract', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        // const codeBuf: string[] = [];

        // if (isBrowser) {
        //     // @ts-ignore
        //     window.file.forEach(n => codeBuf.push(String.fromCharCode(n)));
        // } else {
        //     const fs = require('fs');
        //     const native = Uint8Array.from(fs.readFileSync(`${__dirname}/native/counter-native-v2`));
        //     native.forEach(n => codeBuf.push(String.fromCharCode(n)));
        // }

        // const contractName = `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`;
        const contractName = 'counter123';
        console.log("合约名字：",contractName)
        console.log("合约账户：",contractAccount)

        try {
            const {transaction,preExecutionTransaction} = await xsdk.invokeContarct(contractName, 'increase', 'native', {key: 'a'});
            console.log(preExecutionTransaction)
    
            expect(transaction).toBeTruthy();
            expect(preExecutionTransaction).toBeTruthy();
    
            const result = await xsdk.postTransaction(transaction);
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    });

    test('deploy new wasm contract should return transaction info and result of post', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const codeBuf: string[] = [];

        if (isBrowser) {
            // @ts-ignore
            window.file.forEach(n => codeBuf.push(String.fromCharCode(n)));
        } else {
            const fs = require('fs');
            const wasm = Uint8Array.from(fs.readFileSync(`${__dirname}/wasm/counter.wasm`));
            wasm.forEach(n => codeBuf.push(String.fromCharCode(n)));
        }

        const contractName = `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`;

        try {
            const demo = await xsdk.deployWasmContract(
                contractAccount,
                wasmName,
                codeBuf.join(''),
                'c', {
                    creator: address
                }
            );

            await xsdk.postTransaction(demo.transaction);
        }
        catch (err) {}

        const {transaction, preExecutionTransaction} = await xsdk.deployWasmContract(
            contractAccount,
            contractName,
            codeBuf.join(''),
            'c', {
                creator: address
            }
        );

        expect(transaction).toBeTruthy();
        expect(preExecutionTransaction).toBeTruthy();

        const result = await xsdk.postTransaction(transaction);

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('invoke contract', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const {
            transaction,
            preExecutionTransaction
        } =
            // await xsdk.invokeContarct('counter1000', 'increase', 'wasm', {
            await xsdk.invokeContarct(wasmName, 'increase', 'wasm', {
                key: '11'
            });

        expect(transaction).toBeTruthy();
        expect(preExecutionTransaction).toBeTruthy();

        const result = await xsdk.postTransaction(transaction);

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('deploy a solidity contract', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        const bin = '608060405234801561001057600080fd5b5060405161016c38038061016c8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080600081905550506101118061005b6000396000f3fe60806040526004361060305760003560e01c80632e64cec11460355780636057361d14605d5780638995db74146094575b600080fd5b348015604057600080fd5b50604760bf565b6040518082815260200191505060405180910390f35b348015606857600080fd5b50609260048036036020811015607d57600080fd5b810190808035906020019092919050505060c8565b005b60bd6004803603602081101560a857600080fd5b810190808035906020019092919050505060d2565b005b60008054905090565b8060008190555050565b806000819055505056fea265627a7a723158209500c3e12321b837819442c0bc1daa92a4f4377fc7b59c41dbf9c7620b2f961064736f6c63430005110032';
        const abi = '[{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"storepay","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]';

        const contractName = `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`;

        try {
            const demo = await xsdk.deploySolidityContract(
                contractAccount,
                solidityName,
                bin,
                abi,
                'evm', {
                    num: '1'
                }
            );

            await xsdk.postTransaction(demo.transaction);
        }
        catch (err) {}

        const {preExecutionTransaction, transaction} = await xsdk.deploySolidityContract(
            contractAccount,
            contractName,
            bin,
            abi,
            'evm', {
                num: '1'
            }
        );

        expect(preExecutionTransaction).toBeTruthy()
        expect(transaction).toBeTruthy();

        const result = await xsdk.postTransaction(transaction);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    })

    test('invoke Solidity contract', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const {transaction, preExecutionTransaction} =
            await xsdk.invokeSolidityContarct(solidityName, 'store', 'evm', {num: '2'});

        expect(preExecutionTransaction).toBeTruthy()
        expect(transaction).toBeTruthy();

        const result = await xsdk.postTransaction(transaction);

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('query contract info', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const methodName = 'increase';

        const result = await xsdk.queryACL(
            contractAccount,
            {
                contarctName: wasmName,
                contractMethod: methodName
            }
        )

        expect(result).toHaveProperty('header');
        expect(result.header).not.toHaveProperty('error');
        expect(result).toHaveProperty('acl');
    });

    test('query contract account stat', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const result = await xsdk.queryContractStatData();

        expect(result).toHaveProperty('header');
        expect(result.header).not.toHaveProperty('error');
        expect(result).toHaveProperty('data');
    });

    // Todo: Upgrade


});
