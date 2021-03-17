# Xuper SDK JS

[![Build Status](https://travis-ci.org/xuperchain/xuper-sdk-js.svg?branch=master)](https://travis-ci.org/xuperchain/xuper-sdk-js)
[![npm version](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk.svg)](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk)

Xuper SDK (JS/TS) is a software development kit that allows developers to quickly use XuperChain.

The SDK provides a service interface that includes account, transaction, contract and various query functions. It can be used in a browser and Nodejs environment.

---

English | [简体中文](./README_zh-CN.md)

## Usage

### Install Npm package

> npm install --save @xuperchain/xuper-sdk

### Quick start

```javascript
import XuperSDK from '@xuperchain/xuper-sdk';

const node = ''; // node
const chain = ''; // chain

const xsdk = XuperSDK.getInstance({
    node,
    chain
});

const start = async () => {
    const result = await xsdk.getBlockChains();
    console.log(result);
};

start();
```

> [Details - API reference](#API reference documentation)


### Code examples

[![Edit xuper-sdk-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xuper-sdk-demo-q5m93?fontsize=14&hidenavigation=1&theme=dark)

### Environments

- Browser depends on window.crypto
- Nodejs >= v10.0

##### In the Nodejs environment, **gRPC** is supported and used by default, you can choose to close it, and still use Http to request
```javascript
XuperSDK.getInstance({
    ...,
    env: {
        node: {
            disableGRPC: true // disable gRPC
        }
    }
})
```

### How to build a test environment

#### Read the [documentation](https://github.com/xuperchain/xuperchain) , compile and deploy XuperChain

#### Use XuperChain Docker image to build a single-node service

1. Pull image (*XuperChian v3.7 - [Repository](https://github.com/SmilingXinyi/xuperchain)*)
> docker pull smilingxinyi/xuperchain

2. Start container
> docker run -d -p 8098:8098  -p 37101:37101 -p 47101:47101 --name xc smilingxinyi/xuperchain

## API reference documentation

[Link](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html)

## Services

### Account

service|name|link|state
---|---|---|:---:
Create account|create|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#create)|√
Retrieve account|retrieve|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#retrieve)|√
Import private key|import|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#import)|√
Export private key|export|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#export)|√
Chekc address|checkAddress|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkaddress)|√
Check mnemonic|checkMnemonic|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkmnemonic)|√
Balance|getBalance|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalance)|√
Balance Detail|getBalanceDetail|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalanceDetail)|√

### Blockchain infomation

service|name|link|state
---|---|---|:---:
Blockchains|getBlockChains|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockChains)|√
Status|checkStatus|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkStatus)|√
Block by id|getBlockById|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockById)|√
Block by height|getBlockByHeight|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockByHeight)|√

### Transaction

service|name|link|state
---|---|---|:---:
Make transfer|transfer|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#transfer)|√
Post tx|postTransaction|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#postTransaction)|√
Query tx|queryTransaction|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryTransaction)|√

### Contract

service|name|link|state
---|---|---|:---:
New contract account|createContractAccount|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#createContractAccount)|√
Contract list|getContracts|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getContracts)|√
Deploy Wasm contract|deployWasmContract|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#deployWasmContract)|√
Invoke Wasm contarct|invokeContarct|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#invokeContarct)|√
Deploy Solidity contract|deploySolidityContract|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#deploySolidityContract)|√
Invoke Solidity contarct|invokeSolidityContarct|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#invokeSolidityContarct)|√
Query ACL|queryACL|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryACL)|√
Query stat data about contract|queryContractStatData|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryContractStatData)|√

## Plugin

#### Endorsement service plugin

> The plugin must be used on the `public network`

##### EndorsementPlugin

Example:

```javascript

const params = {
    server: process.env.ENDORSE_SERVER, // ip, port
    fee: process.env.FEE, // fee
    endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS, // sign address
    endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS // fee address
}

const xsdk = new XuperSDK({
    node,
    chain,
    plugins: [
        EndorsementPlugin({
            transfer: params,
            makeTransaction: params
        })
    ]
});

```
