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

    describe('check status of chain', () => {
        test('should return the blockchain status data structure', async () => {
            const xsdk = new XuperSDK({node, chain});

            const status = await xsdk.checkStatus();

            expect(status).toBeTruthy();
            expect(status).toHaveProperty('meta');
            expect(status).toHaveProperty('block');
            expect(status).toHaveProperty('utxoMeta');
        });
    });

});
