/**
 * @file (cfca)
 * Created by baidu on 2020/7/15
 */
// import {PrivateKey} from '../types';

import Long from 'long';
import {postRequest, publicOrPrivateKeyToString} from '../utils';
import sha256 from 'sha256';
import {ec as EC} from 'elliptic';
import BN from 'bn.js';
import {AccountModel} from '../types';

const plugin = (args?: any) => ({
    name: 'CFCA',
    func: {
        postTx: async function (_defaultArgs: any, node: string, chain: string, realBody: any, account: AccountModel) {
            // @ts-ignore
            const cfcaCertContentBytes = 'test'; //Uint8Array.from('test'.split('').map(char => char.charCodeAt(0)));


            const pluginVerifyInfo = {
                pluginName: 'grpcdemo',
                // @ts-ignore
                contents: btoa(cfcaCertContentBytes)
            };

            const body = {
                pluginVerifyInfos: [pluginVerifyInfo],
                bcName: chain,
                initiatorAddress: btoa('nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh')
            };

            const rr = await postRequest(`${node}/v1/get_signs`, body);

            let accessTokens = rr.accessTokens;

            accessTokens = accessTokens.map((token: any) => {
                token.timestamp = parseInt(token.timestamp, 10);
                return token;
            });

            const timestamp = Date.now().toString().padEnd(19, '0');

            const ts = Long.fromString(timestamp);
            const timestampBytes = ts.toBytes();

            const te = new TextEncoder();

            const accessTokensBytes = te.encode(JSON.stringify(accessTokens));

            const messageBytes =new Uint8Array(timestampBytes.length + accessTokensBytes.length);

            messageBytes.set(Uint8Array.from(timestampBytes), 0);
            messageBytes.set(Uint8Array.from(accessTokensBytes), timestampBytes.length);

            // @ts-ignore
            const message = sha256.x2(messageBytes, {asBytes: true});

            const ec = new EC('p256');
            const bnD = new BN(account.privateKey.D);
            const privKey = ec.keyFromPrivate(bnD.toArray());
            const sign = privKey.sign(message);
            const derbuf = sign.toDER().map((v: number) => String.fromCharCode(v));

            realBody.header = {
                userSign: {
                    PublicKey: publicOrPrivateKeyToString(account.publicKey),
                    Sign: btoa(derbuf.join('')),
                    timestamp: timestamp,
                    accessTokens: accessTokens
                }
            };

            return realBody;
        }
    },
    hookFuncs: [
        'postTx'
    ],
    args: Object.assign({}, {
        postTx: {
            server: 'http://10.64.27.48:8093',
            certFile: 'cfca.cert',
            address: 'nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh'
        }
    }, args)
});

export default plugin;
