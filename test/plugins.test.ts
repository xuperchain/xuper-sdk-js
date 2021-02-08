/**
 * @file (plugins.test)
 * Created by baidu on 2020/7/15
 */

jest.setTimeout(10000);

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

import EndorsementPlugin from '../src/plugins/endorsement';
import CFCAPlugin from '../src/plugins/cfca';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST || 'http://10.64.27.48:8084',
    chain = process.env.CHAIN || 'xuper',
    mnemonic = '玉 脸 驱 协 介 跨 尔 籍 杆 伏 愈 即';

describe('Xuper SDK <Plugin> ——', () => {

    test('plugin - contract', async () => {
        const xsdk = new XuperSDK({
            node: 'https://xuper.baidu.com/nodeapi',
            chain,
            plugins: [
                EndorsementPlugin({
                    transfer: {
                        server: 'https://xuper.baidu.com/nodeapi',
                        fee: '100',
                        endorseServiceCheckAddr: 'jknGxa6eyum1JrATWvSJKW3thJ9GKHA9n',
                        endorseServiceFeeAddr: 'aB2hpHnTBDxko3UoP2BpBZRujwhdcAFoT'
                    },
                    makeTransaction: {
                        server: 'https://xuper.baidu.com/nodeapi',
                        fee: '100',
                        endorseServiceCheckAddr: 'jknGxa6eyum1JrATWvSJKW3thJ9GKHA9n',
                        endorseServiceFeeAddr: 'aB2hpHnTBDxko3UoP2BpBZRujwhdcAFoT'
                    }
                    // transfer: {
                    //     server: 'http://127.0.0.1:8098',
                    //     fee: '100',
                    //     endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    //     endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                    // },
                    // makeTransaction: {
                    //     server: 'http://127.0.0.1:8098',
                    //     fee: '100',
                    //     endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    //     endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                    // }
                })
            ]
        });

        // xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        xsdk.import('998101', 'XNDPu7TP2uU5TXbrWYLfi9XdrIQ9hhXwO9chIfrFweaLgmXiqNnrdCkFZY0gyb0fE3bgZ6uUyZbQCPbyj/Q+86uvZ/OG5zhy3xRTK9IEFcOqExrvIspcIkkEZbXHzPGfrNQEtJFRszIluN0/IdicTHlmn1DlJr8V/l+GddyisDNU0DE7TgVe4Nb8dhY2UwgnX6yGvekyfQqX75qZiiJGRGmF116XXUCnxxW3kSAR8AJsLp9suHByPF9a5YhWenaY1UtYqCtynukQQusxFNJ+B5HFCnaw6pMwEm55ySntFufLNOBgF59mlpM/RGx9us04Am47kwlvMASJuNV9VV6aHlt/cEqfMVMTVXfzKZORfvs=', true);

        // const {preExecutionTransaction, transaction} = await xsdk.invokeContarct('counter631', 'get', 'wasm', {});

        const {preExecutionTransaction, transaction} = await xsdk.invokeContarct('counter007', 'increase', 'wasm', {});

        console.log(preExecutionTransaction);

        const result = await xsdk.postTransaction(transaction);

        console.log(result);

        expect(result.header).toHaveProperty('logid');
        expect(result.header).not.toHaveProperty('error');
    });

    test('tx', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            plugins: [EndorsementPlugin({
                transfer: {
                    server: 'http://127.0.0.1:8098',
                    fee: '100',
                    endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                },
                makeTransaction: {
                    server: 'http://127.0.0.1:8098',
                    fee: '100',
                    endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                }
            })]
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        try {
            const tx = await xsdk.transfer({
                to: process.env.TEST_TARGET_ADDRESS || 'QzKX5pAkmJKVtSwGFDjFg2nRm6iH1inAk',
                amount: '200',
                fee: '0'
            });

            const res = await xsdk.postTransaction(tx);

            console.log(res);

            const ress = await xsdk.queryTransaction(tx.txid!);

            console.log(ress);
        } catch (e) {
            throw e;
        }
    });

    test('tx2', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            plugins: [CFCAPlugin(), EndorsementPlugin({
                transfer: {
                    server: 'http://10.64.27.48:8084',
                    fee: '100',
                    endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                },
                makeTransaction: {
                    server: 'http://10.64.27.48:8084',
                    fee: '100',
                    endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                }
            })]
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        try {
            const tx = await xsdk.transfer({
                to: process.env.TEST_TARGET_ADDRESS || 'QzKX5pAkmJKVtSwGFDjFg2nRm6iH1inAk',
                amount: '200',
                fee: '0'
            });

            console.warn('✔️');
            const res = await xsdk.postTransaction(tx);

            console.log(res);

            const ress = await xsdk.queryTransaction(tx.txid!);

            console.log(ress);
        } catch (e) {
            throw e;
        }
    });


    test('tx3', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            plugins: [CFCAPlugin()]
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        try {
            const tx = await xsdk.transfer({
                to: process.env.TEST_TARGET_ADDRESS || 'QzKX5pAkmJKVtSwGFDjFg2nRm6iH1inAk',
                amount: '200',
                fee: '0'
            });

            console.warn('✔️');
            const res = await xsdk.postTransaction(tx);
            console.warn('✔️');
            console.log(res);

            const ress = await xsdk.queryTransaction(tx.txid!);

            console.log(ress);
        } catch (e) {
            throw e;
        }
    });

});
