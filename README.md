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

## Usage

### Install package

> npm install --save @xuperchain/xuper-sdk

### Example

```javascript

import XuperSDK, {Cryptography, Language, Strength} from '@xuperchain/xuper-sdk'

const xsdk = new XuperSDK({
    node,
    chain,
    needEndorse: true,
    endorseConf
})

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
