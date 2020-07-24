/**
 * @file (plugins.test)
 * Created by baidu on 2020/7/15
 */

jest.setTimeout(1000000000);

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
    test('tx', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            plugins: [EndorsementPlugin({
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

        xsdk.recover(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        console.log(await xsdk.getBalance())

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

        xsdk.recover(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

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

        xsdk.recover(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

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
