/**
 * @file Xuper SDK test
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */
jest.setTimeout(10000);

import XuperSDK from '../src';

const
    node = process.env.NODE || 'http://localhost:8098',
    chain = process.env.CHAIN || 'xuper';

describe('Xuper SDK', () => {
    describe('check the status of', () => {
        test('the chain should return the blockchain status data structure', async () => {
            const xsdk = new XuperSDK({
                node,
                chain
            });

            const status = await xsdk.checkStatus();
            expect(status).toBeTruthy();
            expect(status).toHaveProperty('meta');
            expect(status).toHaveProperty('block');
            expect(status).toHaveProperty('utxoMeta');
        });

        // test('the address balance should return balance structure', async () => {
        //     const xsdk = new XuperSDK({
        //         node,
        //         chain
        //     });
        //
        //
        // });
    })
});
