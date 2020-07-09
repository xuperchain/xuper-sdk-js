/**
 * @file Requests
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {grpcClient, isBrowser, postRequest} from './utils';

const client = !isBrowser && grpcClient();

export const getStatus = (node: string, body: any) => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetBlockChainStatus(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    console.warn(err);
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/get_bcstatus`;
        return postRequest(target, body);
    }
};

export const getBalance = (node: string, body: any) => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetBalance(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    console.warn(err);
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/get_balance`;
        return postRequest(target, body);
    }
};
