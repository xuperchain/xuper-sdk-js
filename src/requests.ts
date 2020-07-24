/**
 * @file Requests
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {grpcClient, isBrowser, postRequest} from './utils';

console.log('isBrowser', isBrowser);

const client = !isBrowser && grpcClient();

export const getStatus = (node: string, body: any): Promise<any> => {
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

export const getBalance = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetBalance(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/get_balance`;
        return postRequest(target, body);
    }
};

export const getBalanceDetail = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetBalanceDetail(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/get_balance_detail`;
        return postRequest(target, body);
    }
};

export const preExec = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.PreExec(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/preexec`;
        return postRequest(target, body);
    }
};

export const endorser = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.EndorserCall(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/endorsercall`;
        console.warn(JSON.stringify(body, null, 4));
        return postRequest(target, body);
    }
};

export const postTransaction = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.EndorserCall(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/post_tx`;
        console.warn(JSON.stringify(body, null, 4));
        return postRequest(target, body);
    }
};

export const queryTransaction = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.QueryTx(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    }
    else {
        const target = `${node}/v1/query_tx`;
        return postRequest(target, body);
    }
}
