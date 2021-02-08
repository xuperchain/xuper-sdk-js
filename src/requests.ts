/**
 * @file Requests
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {grpcClient, grpcEndorserClient, postRequest} from './utils';

let client: any = null;
let endorsorClient: any = null;

enum RESOURCE_TYPE {
    CPU,
    MEMORY,
    DISK,
    XFEE
}

export const initializationClient = (node: string) => {
    client = grpcClient(node);
};

export const initializationEndorseClient = (node: string) => {
    endorsorClient = grpcEndorserClient(node);
};

const gRPCPromise = (service: string, body: any) => {
    return new Promise((resolve, reject) => client[service](body, (err: Error, response: any) => {
        if (!err) {
            resolve(response);
        } else {
            reject(err);
        }
    }));
};

export const getStatus = (node: string, body: any): Promise<any> => {
    if (client) {
        return gRPCPromise('GetBlockChainStatus', body);
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

export const preExecWithFee = async (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.PreExecWithSelectUTXO(body, (err: Error, response: any) => {
                if (!err) {
                    if (response.response.requests) {
                        response.response.requests = response.response.requests.map((request: any) => {
                            if (request['resource_limits'] && request['resource_limits'].length > 0) {
                                request['resource_limits'] = request['resource_limits'].map((info: any) => {
                                    const tempInfo = {};


                                    // @ts-ignore
                                    tempInfo.type = info.type;
                                    if (info.limit && info.limit !== "0") {
                                        // @ts-ignore
                                        tempInfo.limit = parseInt(info.limit, 10);
                                    }
                                    return tempInfo;
                                });
                            }

                            return request;
                        });
                    }

                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/preexec_select_utxo`;
        const response = await postRequest(target, body);
        if (response.response.requests) {
            response.response.requests = response.response.requests.map((request: any) => {
                if (request['resource_limits'] && request['resource_limits'].length > 0) {
                    request['resource_limits'] = request['resource_limits'].map((info: any) => {
                        const tempInfo = {};

                        // @ts-ignore
                        tempInfo.type = RESOURCE_TYPE[info.type];

                        if (info.limit && info.limit !== "0") {
                            // @ts-ignore
                            tempInfo.limit = parseInt(info.limit, 10);
                        }
                        return tempInfo;
                    });
                }

                return request;
            });
        }
        return response;

    }
};

export const endorser = (node: string, body: any): Promise<any> => {
    if (endorsorClient) {
        return new Promise<any>((resolve, reject) =>
            endorsorClient.EndorserCall(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/endorsercall`;
        return postRequest(target, body);
    }
};

export const postTransaction = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.PostTx(body, (err: Error, response: any) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        );
    } else {
        const target = `${node}/v1/post_tx`;
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
};

export const accountContractList = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetAccountContracts(body, (err: Error, response: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            })
        );
    }
    else {
        const target = `${node}/v1/get_account_contracts`;
        return postRequest(target, body);
    }
};

export const addressContractList = (node: string, body: any): Promise<any> => {
    if (client) {
        return new Promise<any>((resolve, reject) =>
            client.GetAddressContracts(body, (err: Error, response: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            })
        );
    }
    else {
        const target = `${node}/v1/get_address_contracts`;
        return postRequest(target, body);
    }
};

export const accountList = (node: string, body: any): Promise<any> => {
    if (client) {
        return gRPCPromise('GetAccountByAK', body);
    }
    else {
        const target = `${node}/v1/get_account_by_ak`;
        return postRequest(target, body);
    }
};
