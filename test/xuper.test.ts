/**
 * @file Xuper SDK test
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */
jest.setTimeout(10000);

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST || 'http://localhost:8098',
    chain = process.env.CHAIN || 'xuper';

describe('Xuper SDK', () => {
    test('check status of chain s hould return blockchain status', async () => {
        const xsdk = new XuperSDK({node, chain});
        const status = await xsdk.checkStatus();
        expect(status).toBeTruthy();
        expect(status).toHaveProperty('meta');
        expect(status).toHaveProperty('block');
        expect(status).toHaveProperty('utxoMeta');
    });

    describe('convert txid to hex string', () => {
        const xsdk = new XuperSDK({node, chain});
        test('`95z7TJlLI6cFHGL+rQp307LDwPlltErTxrxuN9gaJdI=` '
            + 'should return `f79cfb4c994b23a7051c62fead0a77d3b2c3c0f965b44ad3c6bc6e37d81a25d2`', () => {
            const hexTxid = xsdk.transactionIdToHex('95z7TJlLI6cFHGL+rQp307LDwPlltErTxrxuN9gaJdI=');
            expect(hexTxid).toEqual('f79cfb4c994b23a7051c62fead0a77d3b2c3c0f965b44ad3c6bc6e37d81a25d2');
        });
    });
});
