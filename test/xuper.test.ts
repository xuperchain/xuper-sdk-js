/**
 * @file Xuper SDK test
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import XuperSDK, {Cryptography, Language} from '../src';
import {isBrowser} from '../src/utils';

isBrowser && require('whatwg-fetch');

const
    node = process.env.SERVER!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    address = process.env.TEST_ADDRESS!;

describe('Xuper SDK', () => {
    test('get blockchains', async () => {
        const xsdk = new XuperSDK({node, chain});
        const result = await xsdk.getBlockChains();
        expect(result).toHaveProperty('header');
        expect(result.header).not.toHaveProperty('error');
        expect(result).toHaveProperty('blockchains');
    });

    test('check status of current chain', async () => {
        const xsdk = new XuperSDK({node, chain});
        const status = await xsdk.checkStatus();
        expect(status).toBeTruthy();
        expect(status).toHaveProperty('meta');
        expect(status).toHaveProperty('block');
        expect(status).toHaveProperty('utxoMeta');
    });

    test('convert txid to hex string', () => {
        const xsdk = new XuperSDK({node, chain});
        const hexTxid = xsdk.transactionIdToHex('95z7TJlLI6cFHGL+rQp307LDwPlltErTxrxuN9gaJdI=');
        expect(hexTxid).toEqual('f79cfb4c994b23a7051c62fead0a77d3b2c3c0f965b44ad3c6bc6e37d81a25d2');
    });

    test('get balance', async () => {
        const xsdk = new XuperSDK({node, chain});
        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);
        const result = await xsdk.getBalance();
        expect(result).toHaveProperty('header');
        expect(result).toHaveProperty('address', address);
        expect(result).toHaveProperty('bcs');
    });

    test('get balance detail', async () => {
        const xsdk = new XuperSDK({node, chain});
        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);
        const result = await xsdk.getBalanceDetail();
        expect(result).toHaveProperty('header');
        expect(result).toHaveProperty('address', address);
        expect(result).toHaveProperty('tfds');
    })
});
