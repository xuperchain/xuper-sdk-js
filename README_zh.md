# Xuper SDK (JS/TS)

百度超级链SDK

[![Build Status](https://travis-ci.org/xuperchain/xuper-sdk-js.svg?branch=master)](https://travis-ci.org/xuperchain/xuper-sdk-js)
[![npm version](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk.svg)](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk)

## 环境

- 浏览器
- Nodejs >= 10.0

## 实现

- 账号
- 交易
- 智能合约

## 使用指南

`详细使用可参考src/index.ts, src/proto/*`

#### 初始化

```js
const xsdk = new XuperSDK({
    node,
    chain
});
```

#### 功能实现

[文档](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html)

|功能|接口|文档链接|
|---|---|---|
|创建链账号|create|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#create|
|助记词恢复账号|retrieve|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#retrieve|
|获取余额|getBalance|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalance|
|获取余额详情|getBalanceDetail|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalancedetail|
|发起转账|transfer|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#transfer|
|发送交易|postTransaction|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#posttransaction|
|查询交易|queryTransaction|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#querytransaction|
|创建合约账号|createContractAccount|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#createcontractaccount|
|部署智能合约|deployWasmContract|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#deploywasmcontract|
|调用合约|invokeContarct|https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#invokecontarct|
