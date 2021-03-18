jest.setTimeout(1000000000);

import XuperSDK from '../src';
import {isBrowser} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

import EndorsementPlugin from '../src/plugins/endorsement';

isBrowser && require('whatwg-fetch');

const
    node = process.env.SERVER!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    address = process.env.TEST_ADDRESS;

describe.skip('Xuper SDK <Plugin> ——', () => {
    test('make transfer with endorsement', async () => {
        const params = {
            server: process.env.ENDORSE_SERVER,
            fee: process.env.FEE,
            endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS,
            endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS
        };

        const plugins = [
            EndorsementPlugin({
                transfer: params,
                makeTransaction: params
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

        const ressult = await xsdk.postTransaction(tx);
        expect(ressult).toHaveProperty('header');
        expect(ressult.header).not.toHaveProperty('error');
    });
});
