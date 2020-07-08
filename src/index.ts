/**
 * @file Xuper SDK
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {XuperSDKInterface, Account} from './interfaces';
import {Options} from './types';
import {
    // xchainProto,
    grpcClient,
    postRequest,
    isBrowser
} from './utils';

export default class XuperSDK implements XuperSDKInterface {
    static instance: XuperSDK;
    private options: Options;
    private account?: Account;

    public static getInstance(opts: Options): XuperSDK {
        if (!this.instance) {
            this.instance = new this(opts);
        }
        return this.instance;
    }

    constructor(opts: Options) {
        this.options = {...opts};
    }

    checkStatus(): Promise<any> {
        const node = this.options.node;
        const body = {
            bcname: this.options.chain
        };
        if (isBrowser) {
            const target = `${node}/v1/get_bcstatus`;
            return postRequest(target, body);
        } else {
            return new Promise<any>((resolve, reject) =>
                grpcClient.GetBlockChainStatus(body, (err: Error, response: any) => {
                    if (!err) {
                        resolve(response);
                    }
                    else {
                        console.warn(err);
                        reject(err);
                    }
                })
            )
        }
    }

    getBalance(address?: string): Promise<any> {
        const node = this.options.node;
        let addr = address;

        if (!addr && this.account) {
            addr = this.account.address;
        } else {
            // Todo: throw error of wrong parameter
        }

        // Todo: check addr

        const body = {
            address: addr,
            bcs: [{
                bcname: this.options.chain
            }]
        };

        if (isBrowser) {
            const target = `${node}/v1/get_balance`;
            return postRequest(target, body);
        } else {
            return grpcClient.GetBalance(body);
        }
    }

    /*
    checkAddress(address: string): boolean {
        try {
            const decode = base58Decode(address);
            if (decode.length < 1) {
                return false;
            }
            const simpleCheckCode = new Uint8Array(decode.slice(decode.length - 4));
            const checkContent = decode.slice(0, decode.length - 4);
            const checkCode = sha256.x2(Array.from(checkContent), {asBytes: true});
            const realCheckCode = new Uint8Array(checkCode.slice(0, 4));
            return (deepEqual(simpleCheckCode, realCheckCode));
        } catch (e) {
            return false;
        }
    }
     */

    // getBalanceDetail(address?: string): Promise<any> {
    //     const node = this.options.node;
    //     let addr = address;
    //     /*
    //     body: JSON.stringify({
    //             address: address || this.accountModel!.address,
    //             tfds: [{
    //                 bcname: this.options.chain
    //             }]
    //         })
    //      */
    //     return undefined;
    // }
}
