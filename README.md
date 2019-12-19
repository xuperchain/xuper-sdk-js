# Xuper SDK JS 

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

Run
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

- Create new account [Detail](./docs/classes/xupersdk.html#createaccount)

- Revert exist account [Detail](./docs/classes/xupersdk.html#revertaccount)
    
- Query transaction [Detail](./docs/classes/xupersdk.html#querytransaction)

- More... [documents](./docs)

## Todos

- Support xuperchain/xuperunion
- Suppert contract
