# Xuper SDK JS 

[![Build Status](https://travis-ci.org/xuperchain/xuper-sdk-js.svg?branch=master)](https://travis-ci.org/xuperchain/xuper-sdk-js)

A simple JS(TS) SDK for XuperOS

## Features

- Create / Revert account
- Get local account balance and detail
- Make, post and query transaction

## Support `Xuper OS`

- Pre-Execution
- Endorser check and signature

## Usage

### install npm

> npm install --save xuper-sdk

## Example

```javascript

import XuperSDK, {Cryptography, Language, Strength} from 'xuper-sdk'

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

- More... [documents](https://xuperchain.github.io/xuper-sdk-js/)

## Todos

- Support xuperchain/xuperunion
- Support contract
