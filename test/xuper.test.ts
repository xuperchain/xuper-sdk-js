/**
 * @file Xuper SDK test
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */
jest.setTimeout(10000);

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';

isBrowser && require('whatwg-fetch');

const
    node = process.env.HOST!,
    chain = process.env.CHAIN!;


test('check status of xuperchain should return current status', async () => {
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
