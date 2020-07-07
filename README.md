# Xuper SDK JS

[![Build Status](https://travis-ci.org/xuperchain/xuper-sdk-js.svg?branch=master)](https://travis-ci.org/xuperchain/xuper-sdk-js)
[![npm version](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk.svg)](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk)

A simple JS(TS) SDK for XuperOS

## Features

- Create / Revert account
- Get local account balance and detail
- Make, post and query transaction

## Support `Xuper OS`

- Pre-Execution
- Endorser check and signature

## Docker镜像

##### 安装 [Repo](https://github.com/SmilingXinyi/xuperchain)

> docker pull smilingxinyi/xuperchain

##### 启动

> docker run -d -p 8098:8098  -p 37101:37101 -p 47101:47101 --name xc smilingxinyi/xuperchain

## Usage

### Install package

> npm install --save @xuperchain/xuper-sdk

### Example

```javascript

// for browser

import XuperSDK, {Cryptography, Language, Strength} from '@xuperchain/xuper-sdk'

const xsdk = new XuperSDK({
    node,
    chain,
    preExecServer: '',
    needDefaultEndorse: true,
    defaultEndorseConf
})

xsdk.createAccount(
    Language.SimplifiedChinese,
    Strength.Easy,
    Cryptography.EccFIPS
)

```

```javascript

// for nodejs
// without endorse


const {default: XuperSDK, Language, Strength, Cryptography} = require('@xuperchain/xuper-sdk/lib/index.node');

const xsdk = new XuperSDK({
    node,
    chain,
    preExecServer,
    needDefaultEndorse: false
});

xsdk.createAccount(
    Language.SimplifiedChinese,
    Strength.Easy,
    Cryptography.EccFIPS
)

```

## Documents

- Create new account [Detail](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#createaccount)

- Revert exist account [Detail](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#revertaccount)

- Query transaction [Detail](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#querytransaction)

- [More...](https://xuperchain.github.io/xuper-sdk-js/)

## Todos

- Support xuperchain/xuperunion

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/proto/ --grpc_out=./src/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./src/proto/xuper.proto
