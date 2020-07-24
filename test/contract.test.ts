/**
 * @file (contract)
 * Created by baidu on 2020/7/20
 */


import XuperSDK from '../src';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST || 'http://localhost:8098',
    chain = process.env.CHAIN || 'xuper',
    mnemonic = '玉 脸 驱 协 介 跨 尔 籍 杆 伏 愈 即';
    // address = 'nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh';


describe('Xuper SDK contract ——', () => {
    test('create an new contact account', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const account = xsdk.recover(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        console.warn(account);

        const result = await xsdk.createContractAccount(
            parseInt('1234567890' + (~~(Math.random() * (999999 - 100000) + 100000).toString()))
        );

        console.warn(result);

        // expect(result.header).toHaveProperty('logid');
        // expect(result.header).not.toHaveProperty('error');
    });
});
