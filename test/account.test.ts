/**
 * @file (account.test)
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/7/2
 */

import XuperSDK, {Cryptography, Language} from '../src';
import {AccountModel} from '../src/types';
import {isBrowser} from '../src/utils';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    publicKeyString = process.env.PUBLIC_KEY_STRING!,
    address = process.env.TEST_ADDRESS!;

describe('Xuper SDK account', () => {
    test('create an account with mnemonic should return account model', () => {
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

    test('retrieve the account from mnemonic should return account model', () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const account: AccountModel = xsdk.retrieve(
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

    test('retrieve the account from private key return accout model', () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const account = xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        const encryptPrivateKeyString = xsdk.export('123456');
        const retrievedAccount = xsdk.import('123456', encryptPrivateKeyString);

        expect(retrievedAccount.address).toEqual(account.address);
        expect(retrievedAccount.privateKey.Curvname).toEqual(account.privateKey.Curvname);
        expect(retrievedAccount.privateKey.X).toEqual(account.privateKey.X);
        expect(retrievedAccount.privateKey.Y).toEqual(account.privateKey.Y);
    });

    test('get xuper account public key string', () => {
        const xsdk = new XuperSDK({chain, node});

        xsdk.retrieve(
            mnemonic,
            Language.SimplifiedChinese,
            Cryptography.EccFIPS,
            true
        );

        expect(xsdk.publicKey()).toEqual(publicKeyString);
    })

    test('check mnemonic', () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const result = xsdk.checkMnemonic(
            mnemonic,
            Language.SimplifiedChinese
        );

        expect(result).toBeTruthy();
    });

    test('check address', () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const result = xsdk.checkAddress(
            address
        );

        expect(result).toBeTruthy();
    });
});
