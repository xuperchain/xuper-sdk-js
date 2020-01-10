/**
 * @file test file - account sdk
 * Created by xinyi on 2019/11/27
 */

/* eslint-disable no-undef */
jest.setTimeout(10000);

import XuperSDK, {Cryptography, Language, Strength} from '../src';

require('whatwg-fetch');

const chain = 'xuper';
const node = process.env.NODE || '';

const endorseConf = {
    fee: '10',
    server: process.env.ENDORSE_SERVER || '',
    complianceCheckfeeAddress: process.env.FEEADDRESS || '',
    feeServiceAddress: process.env.FEESERVICEADDRESS || ''
};

describe('Xuper SDK', () => {
    test('create new account with mnemonic should return account model', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});
        const accountModel = xsdk.createAccount(
            Language.SimplifiedChinese,
            Strength.Easy,
            Cryptography.EccFIPS
        );
        expect(accountModel).toHaveProperty('mnemonic');
        expect(accountModel).toHaveProperty('address');
        expect(accountModel).toHaveProperty('publicKey');
        expect(accountModel).toHaveProperty('privateKey');
    });

    test('revert account info with mnemonic should return account model', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});

        const accountModel = xsdk.createAccount(
            Language.SimplifiedChinese,
            Strength.Easy,
            Cryptography.EccFIPS
        );

        const revertAccountModel = xsdk.revertAccount(
            accountModel.mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        expect(revertAccountModel.mnemonic).toEqual(accountModel.mnemonic);
        expect(revertAccountModel.address).toEqual(accountModel.address);
        expect(revertAccountModel.privateKey).toEqual(accountModel.privateKey);
        expect(revertAccountModel.publicKey).toEqual(accountModel.publicKey);
    });

    test('check mnemonic valid should return true', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});

        const accountModel = xsdk.createAccount(
            Language.SimplifiedChinese,
            Strength.Easy,
            Cryptography.EccFIPS
        );

        const result = xsdk.checkMnemonic(
            accountModel.mnemonic,
            Language.SimplifiedChinese
        );
        expect(result).toBeTruthy();
    });

    test('check mnemonic valid should return false', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});

        const accountModel = xsdk.createAccount(
            Language.SimplifiedChinese,
            Strength.Easy,
            Cryptography.EccFIPS
        );

        const invaildMnemonic = accountModel.mnemonic.split(' ');
        invaildMnemonic[0] = '牁';

        const result = xsdk.checkMnemonic(
            invaildMnemonic.join(' '),
            Language.SimplifiedChinese
        );
        expect(result).not.toBeTruthy();
    });

    test('check address valid should return true', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});
        expect(xsdk.checkAddress('nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh')).toBeTruthy();
    });

    test('check address valid should return false', () => {
        const xsdk = new XuperSDK({node: '', chain: 'xuper'});
        const accountModel = xsdk.createAccount(
            Language.SimplifiedChinese,
            Strength.Easy,
            Cryptography.EccFIPS
        );

        const result = accountModel.address.substr(accountModel.address.length - 5);
        expect(xsdk.checkAddress(result)).not.toBeTruthy();
    });

    if (process.env.LOCAL_ENV !== 'XuperOS') {
        console.warn('Skip');
        return;
    }

    /**
     * Basic information
     */

    test('get local account balance should return balance struct', async () => {
        const xsdk = new XuperSDK({node, chain});

        const accountModel = xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const balance = await xsdk.getBalance();
        expect(balance).toHaveProperty('bcs');
        expect(balance.bcs).toHaveLength(1);
        expect(balance.bcs[0]).toHaveProperty('bcname', chain);
        expect(balance.bcs[0]).toHaveProperty('balance');
    });

    test('get local account balance detail should return balance detail struct', async () => {
        const xsdk = new XuperSDK({node, chain});

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const balanceDetail = await xsdk.getBalanceDetail();
        expect(balanceDetail).toHaveProperty('tfds');
        expect(balanceDetail.tfds).toHaveLength(1);
        expect(balanceDetail.tfds[0]).toHaveProperty('bcname', chain);
        expect(balanceDetail.tfds[0]).toHaveProperty('tfd');
        expect(balanceDetail.tfds[0].tfd).toHaveLength(2);
        expect(balanceDetail.tfds[0].tfd[0]).toHaveProperty('balance');
        expect(balanceDetail.tfds[0].tfd[0]).toHaveProperty('isFrozen');
        expect(balanceDetail.tfds[0].tfd[1]).toHaveProperty('balance');
    });

    /**
     * Transaction
     */

    test('post pre-transaction with utxo should return bcname, response, utxoOutput', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const result = await xsdk.preExecTransactionWithUTXO(
            '1',
            []
        );

        const resultObj = JSON.parse(atob(result.ResponseData));
        expect(resultObj.bcname).toEqual(chain);
        expect(resultObj.header).toHaveProperty('logid');
        expect(resultObj.utxoOutput).toHaveProperty('utxoList');
    });

    test('post identity check failed pre-transaction with utxo should 500 status', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        try {
            const result = await xsdk.preExecTransactionWithUTXO(
                '1',
                []
            );
        } catch (err) {
            expect(err).toHaveProperty('error');
        }
    });

    test('generate transaction should return transaction model', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const tx = await xsdk.generateTransaction({
            to: process.env.TEST_TARGET_ADDRESS || '',
            amount: '100',
            fee: '0'
        });

        const result = await xsdk.postTransaction(tx);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('generate transaction with desc should return transaction model', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const tx = await xsdk.generateTransaction({
            to: process.env.TEST_TARGET_ADDRESS || '',
            amount: '100',
            fee: '10',
            desc: 'Hi 你好 こんにちは'
        });

        const result = await xsdk.postTransaction(tx);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('query transaction should return transaction status', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        const txid = '/aGXihDS0VmgQCzazB2gtTHD77P1UPh4wRicDp5jdZA=';

        const result = await xsdk.queryTransaction(txid);
        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
        expect(result.txid).toEqual(txid);
        expect(result).toHaveProperty('status');
    });

    // test('post transaction should return logid', async() => {});

    /**
     * Contract
     */

    // create contract account
    test('create contract account should return successful transaction result', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const result = await xsdk.createContractAccount(
            parseInt('1234567890' + (~~(Math.random() * 10 ** 6 - 10 ** 6) + 10 ** 6).toString())
        );

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    // deploy contract
    test('deploy webassembly contract should return successful transaction result', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',

            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const codeBuf: string[] = [];

        // @ts-ignore
        window.file.forEach(n => codeBuf.push(String.fromCharCode(n)));

        const result = await xsdk.deployWasmContract(
            'XC1234567890666660@xuper',
            `counter${~~(Math.random() * 10 ** 3 - 10 ** 3) + 10 ** 3}`,
            codeBuf.join(''),
            'c',
            {
                creator: 'xchain'
            }
        );

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    // invoke contract
    test('invoke webassembly contract should return successful transaction result', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            needEndorse: true,
            endorseConf
        });

        xsdk.revertAccount(
            process.env.TEST_MNEMONIC || '',
            Language.SimplifiedChinese,
            Cryptography.EccFIPS
        );

        const result = await xsdk.invokeContract('', 'Get', 'xkernel', {
            Bucket: btoa('XCAccount'),
            Key: btoa('XC1111111111111111@xuper')
        });

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });
});
