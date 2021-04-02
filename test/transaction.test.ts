import XuperSDK from '../src';
import {TransactionModel} from '../src/types';
import {isBrowser, toHex, hexToBase64} from '../src/utils';
import {Cryptography, Language} from '../src/constants';

isBrowser && require('whatwg-fetch');

const
    node = process.env.SERVER!,
    chain = process.env.CHAIN!,
    mnemonic = process.env.TEST_MNEMONIC!,
    address = process.env.TEST_ADDRESS;

describe('Xuper transcation', () => {

    let tempTx: TransactionModel;

    test('make tracsfer and post', async () => {
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

        const result = await xsdk.postTransaction(tx);

        expect(result).toHaveProperty('header');
        expect(result.header).not.toHaveProperty('error');

        tempTx = tx;
    });

    test('query transaction', async () => {
        const xsdk = new XuperSDK({node, chain});

        if (tempTx) {
            const result = await xsdk.queryTransaction(tempTx.txid!);

            expect(result).toHaveProperty('header');
            expect(result.header).not.toHaveProperty('error');

            expect(result.tx).toHaveProperty('txid');
            expect(result.tx).toHaveProperty('initiator_signs');
            expect(result.tx).toHaveProperty('initiator', address);
            expect(result.tx).toHaveProperty('version', 1);
            expect(result.tx).toHaveProperty('tx_inputs');
            expect(result.tx).toHaveProperty('tx_outputs');

        }
        else {
            xsdk.retrieve(mnemonic, Language.SimplifiedChinese, Cryptography.EccFIPS, true);

            const tx = await xsdk.transfer({
                to: process.env.TEST_TARGET_ADDRESS || '',
                amount: '100',
                fee: '100'
            });

            await xsdk.postTransaction(tx);

            const result = await xsdk.queryTransaction(tx.txid!);

            expect(result).toHaveProperty('header');
            expect(result.header).not.toHaveProperty('error');

            expect(result.tx).toHaveProperty('txid');
            expect(result.tx).toHaveProperty('initiator_signs');
            expect(result.tx).toHaveProperty('initiator', address);
            expect(result.tx).toHaveProperty('version', 1);
            expect(result.tx).toHaveProperty('tx_inputs');
            expect(result.tx).toHaveProperty('tx_outputs');
        }
    });

    describe('Get block', () => {

        let tempBlockid: string;

        const blockHeight = '1';

        test('by height', async () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            const result = await xsdk.getBlockByHeight(blockHeight);
            expect(result).toHaveProperty('header');
            expect(result.bcname).toBe(chain);
            expect(result).toHaveProperty('block');
            expect(result.block.height).toBe(blockHeight);

            tempBlockid = result.block.blockid;
        });

        test('by blockid', async () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            const blockid = toHex(tempBlockid);

            const result = await xsdk.getBlockById(blockid);
            expect(result).toHaveProperty('header');
            expect(result.bcname).toBe(chain);
            expect(result).toHaveProperty('block');
            expect(result.block.blockid).toBe(hexToBase64(blockid));
        });
    })
});
