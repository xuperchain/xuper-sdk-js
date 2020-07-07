/**
 * @file Utils
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';

const pbxuper = require('./proto/xuper_pb');
const servicexuper = require('./proto/xuper_grpc_pb');

// const PROTO_PATH = __dirname + '/proto/xuper_pb.js';

// var packageDefinition = protoLoader.loadSync(
//     PROTO_PATH,
//     {keepCase: true,
//         longs: String,
//         enums: String,
//         defaults: true,
//         oneofs: true
//     });

export const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

export async function postRequest(t: string, b: any): Promise<any> {
    return fetch(t, {
        method: 'POST',
        body: JSON.stringify(b)
    }).then(
        response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        }
    ).catch(err => {
        throw err;
    });
}

// export async function rpcRequest(params: any) {
//     // @ts-ignore
//     client.GetBlockChainStatus({bcname: 'xuper'}, function (err: any, response: any) {
//         if (err) {
//             throw err;
//         }
//         else {
//             console.log(response)
//         }
//     });
// }

// export const xchainProto = grpc.loadPackageDefinition(packageDefinition).xuperchain;

export const pb = pbxuper;

console.log(servicexuper)

// const z = grpc.credentials.createInsecure();

// @ts-ignore
export const grpcClient = servicexuper.XChainClient('localhost:37101');

if (!isBrowser) {
    // @ts-ignore
    global.btoa = (s: string) => Buffer.from(s, 'binary').toString('base64');
    // @ts-ignore
    global.atob = (e: string) => Buffer.from(e, 'base64').toString('binary');

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    global.fetch = require('node-fetch').default;

    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const {TextEncoder, TextDecoder} = require('util');
    // @ts-ignore
    global.TextEncoder = TextEncoder;
    // @ts-ignore
    global.TextDecoder = TextDecoder;
}
