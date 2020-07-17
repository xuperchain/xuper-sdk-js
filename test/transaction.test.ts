/**
 * @file (transaction.test)
 * Created by baidu on 2020/7/14
 */

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST || 'http://localhost:8098',
    chain = process.env.CHAIN || 'xuper',
    mnemonic = '玉 脸 驱 协 介 跨 尔 籍 杆 伏 愈 即';

describe('Xuper SDK transaction ——', () => {
    describe('check status of chain', () => {
        test('should return the blockchain status data structure', async () => {
            const xsdk = new XuperSDK({node, chain});

            xsdk.recover(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

            try {
                const tx = await xsdk.transfer({
                    to: process.env.TEST_TARGET_ADDRESS || '',
                    amount: '100',
                    fee: '100'
                });

                console.log(tx);
            }
            catch (e) {
                throw e;
            }
        });
    });
});
