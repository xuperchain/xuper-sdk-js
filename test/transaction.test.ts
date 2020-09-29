/**
 * @file (transaction.test)
 * Created by baidu on 2020/7/14
 */

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const node = process.env.SERVER!, chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!, address = process.env.TEST_ADDRESS;

describe('Generate transaction', () => {
    test('shoudle return transaction structure', async () => {
        const xsdk = new XuperSDK({node, chain});

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        const tx = await xsdk.transfer({
            to: process.env.TEST_TARGET_ADDRESS || '',
            amount: '100',
            fee: '100'
        });

        expect(tx).toHaveProperty('txid');
        expect(tx).toHaveProperty('initiator_signs');
        expect(tx).toHaveProperty('initiator', address);
        expect(tx).toHaveProperty('coinbase', false);
        expect(tx).toHaveProperty('autogen', false);
        expect(tx).toHaveProperty('version', 1);
        expect(tx).toHaveProperty('tx_inputs');
        expect(tx).toHaveProperty('tx_outputs');
        expect(tx).toHaveProperty('auth_require', []);
    });
});
