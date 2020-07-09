/**
 * @file Utils
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

export const isBrowser =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined';

if (!isBrowser) {
    // @ts-ignore
    global.btoa = (s: string) => Buffer.from(s, 'binary').toString('base64');
    // @ts-ignore
    global.atob = (e: string) => Buffer.from(e, 'base64').toString('binary');

    // @ts-ignore
    global.fetch = require('node-fetch').default;

    // @ts-ignore
    const {TextEncoder, TextDecoder} = require('util');
    // @ts-ignore
    global.TextEncoder = TextEncoder;
    // @ts-ignore
    global.TextDecoder = TextDecoder;
}

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

/*

export async function getRequest(t: string, b: any): Promise<any> {
    return fetch(t, {
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

 */


export const grpcClient = (PROTO_PATH = `${__dirname}/proto/xuper.proto`) => {
    if (!isBrowser)
        return null;

    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');

    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    );
    const xchainProto = grpc.loadPackageDefinition(packageDefinition).pb;
    // @ts-ignore
    return new xchainProto.Xchain('localhost:37101', grpc.credentials.createInsecure())
};
