# Xuper SDK (JS/TS)

[![Build Status](https://travis-ci.org/xuperchain/xuper-sdk-js.svg?branch=master)](https://travis-ci.org/xuperchain/xuper-sdk-js)
[![npm version](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk.svg)](https://badge.fury.io/js/%40xuperchain%2Fxuper-sdk)

Xuper SDK (JS/TS) 是一个在可以让开发者快速使用 XuperChain 的软件开发工具包。

该SDK提供包含账号、交易、合约与各类查询功能的服务接口，可以在浏览器与 Nodejs 环境下使用。

---

[English](./README.md) | 简体中文

## 使用方式

### 安装Npm依赖包

> npm install --save @xuperchain/xuper-sdk

### 快速开始

```javascript
import XuperSDK from '@xuperchain/xuper-sdk';

const node = ''; // 节点
const chain = ''; // 链

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

*[具体API查看详情](#API参考文档)*

### 使用示例代码

[![Edit xuper-sdk-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xuper-sdk-demo-q5m93?fontsize=14&hidenavigation=1&theme=dark)

### 支持环境
- Browser 依赖 window.crypto
- Nodejs >= v10.0

##### 在Nodejs环境中支持并默认使用**gRPC**，可以选择关闭，依然使用Http方式请求
```javascript
XuperSDK.getInstance({
    ...,
    env: {
        node: {
            disableGRPC: true // 禁用gRPC
        }
    }
})
```

### 如何搭建一个测试环境

#### 阅读 [文档](https://github.com/xuperchain/xuperchain) 编译并部署XuperChain

#### 通过Docker搭建一个搭建单节点服务

1. 拉取镜像 (*XuperChian v3.7 - [Repository](https://github.com/SmilingXinyi/xuperchain)*)
> docker pull smilingxinyi/xuperchain

2. 启动容器
> docker run -d -p 8098:8098  -p 37101:37101 -p 47101:47101 --name xc smilingxinyi/xuperchain

## API参考文档

[文档链接](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html)

## 实现列表

### 区块链账号

接口|函数名|文档链接|状态
---|---|---|:---:
创建区块链账号|create|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#create)|√
助记词恢复账号|retrieve|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#retrieve)|√
导入私钥|import|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#import)|√
导出私钥|export|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#export)|√
检查地址|checkAddress|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkaddress)|√
检查助记词|checkMnemonic|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkmnemonic)|√
获取余额|balance|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalance)|√
获取余额详情|getBalanceDetail|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getbalanceDetail)|√

### 链信息

接口|函数名|文档链接|状态
---|---|---|:---:
获取链|getBlockChains|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockChains)|√
查看当前链状态|checkStatus|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#checkStatus)|√
通过交易ID获取块信息|getBlockById|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockById)|√
通过高度获取块信息|getBlockByHeight|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getBlockByHeight)|√

### 交易

接口|函数名|文档链接|状态
---|---|---|:---:
转账|transfer|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#transfer)|√
发送交易|postTransaction|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#postTransaction)|√
查询交易|queryTransaction|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryTransaction)|√

### 智能合约

接口|函数名|文档链接|状态
---|---|---|:---:
创建合约账户|createContractAccount|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#createContractAccount)|√
获取合约|getContracts|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#getContracts)|√
部署 Wasm 合约|deployWasmContract|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#deployWasmContract)|√
调用 Wasm 合约|invokeContarct|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#invokeContarct)|√
部署 Solidity 合约|deploySolidityContract|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#deploySolidityContract)|√
调用 Solidity 合约|invokeSolidityContarct|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#invokeSolidityContarct)|√
查询访问控制列表|queryACL|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryACL)|√
查询合约状态|queryContractStatData|[LINK](https://xuperchain.github.io/xuper-sdk-js/classes/xupersdk.html#queryContractStatData)|√

## 插件与使用

#### 背书服务插件

> `公开网络`必须使用该插件

##### EndorsementPlugin

Example:

```javascript

const params = {
    server: process.env.ENDORSE_SERVER, // 服务
    fee: process.env.FEE, // 服务费
    endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS, // 背书签名地址
    endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS // 背书服务费地址
}

const xsdk = new XuperSDK({
    node,
    chain,
    plugins: [
        EndorsementPlugin({
            transfer: params,
            makeTransaction: params // 两个一样
        })
    ]
});

```
