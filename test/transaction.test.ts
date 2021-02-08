/**
 * @file (transaction.test)
 * Created by baidu on 2020/7/14
 */

jest.setTimeout(10000);

import XuperSDK, {Endorsement} from '../src';
import {isBrowser, toHex} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const
    node = process.env.SERVER!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    address = process.env.TEST_ADDRESS;

describe('Generate transaction', () => {
    test('shoudle return transaction structure', async () => {
        const xsdk = new XuperSDK({
            node,
            chain,
            plugins: [
                Endorsement({
                    transfer: {
                        server: process.env.ENDORSE_SERVER,
                        fee: '100',
                        endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS,
                        endorseServiceFeeAddr: process.env.SERVICE_SIGN_ADDRESS
                    },
                    makeTransaction: {
                        server: process.env.ENDORSE_SERVER,
                        fee: '100',
                        endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS,
                        endorseServiceFeeAddr: process.env.SERVICE_SIGN_ADDRESS
                    }
                    // transfer: {
                    //     server: 'http://127.0.0.1:8098',
                    //     fee: '100',
                    //     endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    //     endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                    // },
                    // makeTransaction: {
                    //     server: 'http://127.0.0.1:8098',
                    //     fee: '100',
                    //     endorseServiceCheckAddr: 'WwLgfAatHyKx2mCJruRaML4oVf7Chzp42',
                    //     endorseServiceFeeAddr: 'TYyA3y8wdFZyzExtcbRNVd7ZZ2XXcfjdw'
                    // }
                })
            ]
        });

        xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

        console.log('--------transfer--------');

        const tx = await xsdk.transfer({
            to: process.env.TEST_TARGET_ADDRESS || '',
            amount: '200'
        });

        console.log(JSON.stringify(tx, null, 4));

        console.log('--------post--------');

        const res = await xsdk.postTransaction(tx);

        console.log(res);

        // @ts-ignore
        console.log(toHex(tx.txid));

        // @ts-ignore
        console.log(toHex(tx['initiator_signs'][0].Sign));

        expect(tx).toHaveProperty('txid');
        expect(tx).toHaveProperty('initiator_signs');
        expect(tx).toHaveProperty('initiator', address);
        expect(tx).toHaveProperty('coinbase', false);
        expect(tx).toHaveProperty('autogen', false);
        expect(tx).toHaveProperty('version', 1);
        expect(tx).toHaveProperty('tx_inputs');
        expect(tx).toHaveProperty('tx_outputs');
        // expect(tx).toHaveProperty('auth_require', []);
    });
});
