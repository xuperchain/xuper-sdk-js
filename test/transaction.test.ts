/**
 * @file (transaction.test)
 * Created by baidu on 2020/7/14
 */

import XuperSDK from '../src';
import {isBrowser, hexToBase64} from '../src/utils';
import {Cryptography, Language} from '../src/constants';
import EndorsementPlugin from '../src/plugins/endorsement';

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

        const ressult = await xsdk.postTransaction(tx);
        expect(ressult).toHaveProperty('header');
        expect(ressult.header).not.toHaveProperty('error');
    });

    test('with endorsement shoudle return transaction structure', async () => {

        const plugins = [
            EndorsementPlugin({
                transfer: {
                    server: process.env.ENDORSE_SERVER,
                    fee: process.env.FEE,
                    endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS,
                    endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS
                },
                makeTransaction: {
                    server: process.env.ENDORSE_SERVER,
                    fee: process.env.FEE,
                    endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS,
                    endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS
                }
            })
        ];

        const xsdk = new XuperSDK({
            node,
            chain,
            plugins
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        const tx = await xsdk.transfer({
            to: process.env.TEST_TARGET_ADDRESS || '',
            amount: '100',
            fee: '400'
        });

        expect(tx).toHaveProperty('txid');
        expect(tx).toHaveProperty('initiator_signs');
        expect(tx).toHaveProperty('initiator', address);
        expect(tx).toHaveProperty('coinbase', false);
        expect(tx).toHaveProperty('autogen', false);
        expect(tx).toHaveProperty('version', 1);
        expect(tx).toHaveProperty('tx_inputs');
        expect(tx).toHaveProperty('tx_outputs');

        console.warn(JSON.stringify(tx, null, 4));

        const ressult = await xsdk.postTransaction(tx);
        expect(ressult).toHaveProperty('header');
        expect(ressult.header).not.toHaveProperty('error');
    });
});

describe('Get block', () => {
    test('by blockid', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const blockid = 'd5fd3dbcada93f35045cb716412cce8b7c7489f5735c6fee5d8cfbb88b592f53';

        const result = await xsdk.getBlockById(blockid);
        expect(result).toHaveProperty('header');
        expect(result.bcname).toBe(chain);
        expect(result).toHaveProperty('block');
        expect(result.block.blockid).toBe(hexToBase64(blockid));
    });

    test('by height', async () => {
        const xsdk = new XuperSDK({
            node,
            chain
        });

        const blockHeight = '12';

        const result = await xsdk.getBlockByHeight(blockHeight);
        expect(result).toHaveProperty('header');
        expect(result.bcname).toBe(chain);
        expect(result).toHaveProperty('block');
        expect(result.block.height).toBe(blockHeight);
    });
})
