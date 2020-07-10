/**
 * @file (account.test)
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/7/2
 */

import XuperSDK from '../src';
// import XuperErrors, {XuperError} from '../src/error';
import {AccountModel} from '../src/types';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST || 'http://localhost:8098',
    chain = process.env.CHAIN || 'xuper';

describe('Xuper SDK account ——', () => {
    describe('create an account with mnemonic', () => {
        test('should return account model', () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            const account: AccountModel = xsdk.create();

            expect(account).toHaveProperty('mnemonic');
            expect(account).toHaveProperty('privateKey');
            expect(account).toHaveProperty('publicKey');
            expect(account).toHaveProperty('address');
        });
    });

    describe('recover the account', () => {
        test('from mnemonic should return account model', () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            const mnemonic = '玉 脸 驱 协 介 跨 尔 籍 杆 伏 愈 即';
            const address = 'nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh';

            const account: AccountModel = xsdk.recover(
                mnemonic,
                Language.SimplifiedChinese,
                Cryptography.EccFIPS
            );

            expect(account).toHaveProperty('mnemonic');
            expect(account).toHaveProperty('privateKey');
            expect(account).toHaveProperty('publicKey');
            expect(account).toHaveProperty('address');
            expect(account.address).toBe(address);
        });

        test('from private key return accout model', () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            expect(xsdk).toBeTruthy();
        });
    });

    describe('check the address balance', () => {



        // test('should return balance structure', async () => {
        //     const xsdk = new XuperSDK({
        //         node,
        //         chain
        //     });
        //
        //     const balance = await xsdk.getBalance('nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh');
        //
        //     expect(balance).toHaveProperty('bcs');
        //     expect(balance.bcs).toHaveLength(1);
        //     expect(balance.bcs[0]).toHaveProperty('bcname', chain);
        //     expect(balance.bcs[0]).toHaveProperty('balance');
        // });

        // test('of recovered account should return balance structure', async () => {
        //     const xsdk = new XuperSDK({
        //         node,
        //         chain
        //     });
        //
        //     const balance = await xsdk.getBalance();
        //
        //     expect(balance).toHaveProperty('bcs');
        //     expect(balance.bcs).toHaveLength(1);
        //     expect(balance.bcs[0]).toHaveProperty('bcname', chain);
        //     expect(balance.bcs[0]).toHaveProperty('balance');
        // });

        // test('of empty address should return error message with wrong parameter', async () => {
        //     const xsdk = new XuperSDK({
        //         node,
        //         chain
        //     });
        //
        //     const balance = xsdk.getBalance.bind(xsdk);
        //
        //     expect(balance).toThrow(XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]));
        // });
    });
});
