/**
 * @file Utils
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import {PrivateKey, PublicKey} from './types';
import {sha256} from 'js-sha256';
import base58 from 'bs58';
export const isBrowser =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined';

if (!isBrowser) {
    // @ts-ignore
    global.btoa = (s: string): string => Buffer.from(s, 'binary').toString('base64');

    // global.btoa = (s: string): Uint16Array => Buffer.from(s, 'utf8');
    // @ts-ignore
    global.atob = (e: string): string => Buffer.from(e, 'base64').toString('binary');

    // @ts-ignore
    global.fetch = require('node-fetch').default;

    // @ts-ignore
    const {TextEncoder, TextDecoder} = require('util');
    // @ts-ignore
    global.TextEncoder = TextEncoder;
    // @ts-ignore
    global.TextDecoder = TextDecoder;
}

/**
 * Base58 - encode
 * @param data
 * @param alphabet
 */
export function base58Encode(
    data: Uint8Array,
    alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
): string {
    let str = '';
    const d: any[] = [];
    let c: number;
    let j: any;
    let n;

    data.forEach((_, i) => {
        j = 0;
        c = data[i];

        // @ts-ignore
        str += c || str.length ^ i ? '' : 1;

        while (j in d || c) {
            n = d[j];
            n = n ? n * 256 + c : c;
            c = n / 58 | 0;
            d[j] = n % 58;
            j++;
        }
    });

    while (j--) {
        str += alphabet[d[j]];
    }

    return str;
}

/**
 * Base58 - decode
 * @param str
 * @param alphabet
 */
export function base58Decode(
    str: string,
    alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
): Uint8Array {
    const d: any[] = [];
    const arr: number[] = [];
    let c: number;
    let i: any;
    let j: any;
    let n;

    // @ts-ignore
    for (i in str) {
        j = 0;
        c = alphabet.indexOf(str[i]);
        if (c < 0) {
            throw undefined;
        }
        c || arr.length ^ i ? i : arr.push(0);
        while (j in d || c) {
            n = d[j];
            n = n ? n * 58 + c : c;
            c = n >> 8;
            d[j] = n % 256;
            j++;
        }
    }
    while (j--) {
        arr.push(d[j]);
    }
    return new Uint8Array(arr);
}

export function arrayPadStart(arr: any[], len: number): any[] {
    if (arr.length < len) {
        return new Array(len - arr.length).fill(0).concat(arr);
    }
    return arr;
}

export async function postRequest(t: string, b: any, simpleGet = false): Promise<any> {
    let target = t;
    let options = {};

    if (!(/^http(s?):\/\//gm.test(target))) {
        const protocol = typeof location !== 'undefined' ? location.protocol : 'http:';
        target = `${protocol}//${t}`;
    }

    if (simpleGet) {
        method: 'GET'
    }
    else {
        options = {
            method: 'POST',
            body: JSON.stringify(b)
        }
    }

    return fetch(target, options).then(
        response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                }).catch(err => {
                    throw {
                        error: err,
                        response
                    }
                });
            }
            return response.json();
        }
    ).catch(err => {
        throw err;
    });
}

export function toHex(txid: string): string {
    return atob(txid).split('').map(s => s.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

export function hexToBase64(txid: string): string {
    let tempId = txid;
    if (txid.length % 2 > 0)
        tempId = '0' + txid;

    const tempIdArr = tempId.split('');
    // @ts-ignore
    const hexList = tempIdArr.reduce((prev, curr, i) => {
        if (!(i % 2)) {
            // @ts-ignore
            prev.push(parseInt(curr.toString() + tempIdArr[i + 1].toString(), 16));
        }
        return prev;
    }, []);

    return btoa(hexList.map(num => String.fromCharCode(num)).join(''));
}

export const grpcClient = (node: string, PROTO_PATH = `${__dirname}/proto/xuper.proto`): any => {
    if (isBrowser)
        return null;

    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');

    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            bytes: String
        }
    );
    const xchainProto = grpc.loadPackageDefinition(packageDefinition).pb;
    return new xchainProto.Xchain(node, grpc.credentials.createInsecure(), {
        "grpc.max_receive_message_length": 64<<20 - 1, // 63M
        "grpc.max_send_message_length": 64<<20 - 1
    });
};

export const grpcEndorserClient = (node: string, PROTO_PATH = `${__dirname}/proto/xendorser.proto`): any => {
    if (isBrowser)
        return null;

    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');

    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            bytes: String
        }
    );
    const xendorserProto = grpc.loadPackageDefinition(packageDefinition).pb;
    return new xendorserProto.xendorser(node, grpc.credentials.createInsecure(), {
        "grpc.max_receive_message_length": 64<<20 - 1, // 63M
        "grpc.max_send_message_length": 64<<20 - 1
    });
};

export function deepEqual(x: any, y: any): boolean {
    if (x === y) {
        return true;
    }
    if (!(typeof x === 'object' && x !== null)
        || !(typeof y === 'object' && y !== null)) {
        return false;
    }
    if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
    }
    for (const prop in x) {
        if (Object.prototype.hasOwnProperty.call(y, prop)) {
            if (!deepEqual(x[prop], y[prop])) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

/**
 * Converting a public key or private key to a string
 * @param key
 */
export function publicOrPrivateKeyToString(key: PrivateKey | PublicKey): string {
    let str = `\{\"Curvname\":\"${key.Curvname}\",\"X\":${key.X},\"Y\":${key.Y}`;

    // @ts-ignore
    if (key.D) {
        // @ts-ignore
        str += `,\"D\":${key.D}`;
    }
    str += '\}';

    return str;
}

/**
 * Converting a public key or private key to a string
 * @param key
 */
export function stringToPublicOrPrivateKey(keyStr: string): any {
    const replacer = ((_match: string, p1: string, p2: string, p3: string): string => {
        const data = {
            X: p1,
            Y: p2,
            D: p3
        };

        return Object.keys(data).map(key =>
            // @ts-ignore
            // eslint-disable-next-line implicit-arrow-linebreak
            `\"${key}\":\"${data[key]}\"`).join(',');
    });

    return JSON.parse(keyStr.replace(/"X":(\d+),"Y":(\d+),"D":(\d+)/gi, replacer));
}

/**
 * Nonce
 */
export function getNonce(): string {
    let rs = '';
    if (isBrowser) {
        rs = crypto.getRandomValues(new Uint32Array(1))[0].toString();
    } else {
        // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
        const crypto = require('crypto');
        rs = crypto.randomFillSync(new Uint32Array(1))[0].toString();
    }
    return (~~(Date.now() / 1000).toString()) + rs;
}

/**
 * Camel to underline
 * @param tar
 * @param exceptions
 */
export function convert(tar: any, exceptions: [] = []): any {
    let format: any = {};

    if (tar instanceof Array) {
        const newTar = [...tar];
        format = Object.assign([], newTar.map(v => convert(v, exceptions)));
    } else if (tar instanceof Object) {
        const newTar = {...tar};
        Object.keys(newTar).forEach(key => {
            const value = newTar[key];
            format[/^[a-z]/.test(key) && !(exceptions.length > 0 && exceptions.every(item => key === item))  ? key.replace(/([A-Z]{1})/g, '_$1').toLowerCase() : key] = convert(value, exceptions);
        });
    } else {
        format = tar;
    }

    return format;
}

/**
 * JSON stringify
 * @param t
 */
export function jsonEncode(t: any): string {
    if (typeof t === 'undefined') return `${JSON.stringify(null)}\n`;
    return `${JSON.stringify(t)}\n`;
}

/**
 * Xchain address convert to evm address
 * @param addr 
 * @returns 
 */
export function XchainAddrToEvm(addr:string) {
    var result = ''
    try {
        // TODO 判断是否是合约账号;判断合约账户地址仅支持 XC11111111111@xuper, xuper后缀，go-sdk有相同问题。
        if  (determineContractAccount(addr)){
            result = contractAccountToEVMAddress(addr)
        } else if (determineContractName(addr)) {
            result = contractNameToEVMAddress(addr)
        } else {
            result =  xchainAKToEVMAddress(addr)
        }
        return result
    }catch (err) {
        throw err;
    }
    
}
/**
 *  判断合约账户地址仅支持 XC11111111111@xuper, xuper后缀，go-sdk有相同问题。
 * @param xchainAddr 
 * @returns 
 */
function determineContractAccount(xchainAddr:string) {
    if (isAccount(xchainAddr) != 1) {
        return false;
    }
    return xchainAddr.indexOf("@xuper") != -1;
}

const accountPrefix = "XC"
function isAccount(name:string) {
    if (name == '') {
        return -1;
    }
    if (name.indexOf(accountPrefix) != 0) {
        return 0;
    }
    var prefix = name.split("@")[0]
    prefix = prefix.substr(accountPrefix.length)
    if (!validRawAccount(prefix)) {
        return 0;
    }
    return 1;
}

const accountSize = 16
function validRawAccount(accountName:string) {
    if (accountName == "") {
        return false
    }
    if (accountName.length != accountSize) {
        return false
    }
    for (var i = 0 ; i < accountSize; i++) {
        if (accountName[i] >= '0' && accountName[i] <= '9') {
            continue
        } else {
            return false
        }
    } 
    return true
}
const contractAccountPrefixs = "1112"
const Word160Length = 20
function contractAccountToEVMAddress(contractAccount:string) {
    var contractAccountValid = contractAccount.slice(2,18);
    var str = contractAccountPrefixs.concat(contractAccountValid)
    if (str.length != Word160Length) {
        throw new Error("slice passed as address shou have 20 byte length");
    }
    return Buffer.from(str).toString("hex").toUpperCase()
}

const contractNameMaxSize = 16
const contractNameMinSize = 4
const contractNameRegex = /^[a-zA-Z_]{1}[0-9a-zA-Z_.]+[0-9a-zA-Z_]$/

function determineContractName(xchainAddr:string) {
    var contractSize = xchainAddr.length
	if (contractSize > contractNameMaxSize || contractSize < contractNameMinSize) {
        return false
	}
	if (!contractNameRegex.test(xchainAddr)) {
        return false
	}
	return true
}

const evmAddressFiller = "-"
const contractNamePrefixs = "1111"
function contractNameToEVMAddress(contractName:string) {
    var contractNameLength = contractName.length
	var prefixStr = ''
	for (var i = 0; i < Word160Length-contractNameLength-4; i++) {
		prefixStr += evmAddressFiller
	}
	contractName = prefixStr + contractName
	contractName = contractNamePrefixs + contractName

    if (contractName.length != Word160Length) {
        throw new Error("slice passed as address shou have 20 byte length");
    }
    return Buffer.from(contractName).toString("hex").toUpperCase()
}

function xchainAKToEVMAddress(xchainAddr:string) {
    var rawAddr =  base58Decode(xchainAddr)
    if (rawAddr.length < 21){
		throw new Error("bad address")
	}
    rawAddr = rawAddr.slice(1, 21)
    return Buffer.from(rawAddr).toString("hex").toUpperCase()
}

/**
 *  Evm addre convert to xchain addr
 * @param addr 
 * @returns xchainAddr
 */
export function EvmToXchainAddr(addr:string) {
	// return addr, addrType, nil
    var result = ''
    try {
        var bs = Buffer.from(addr,"hex").toString("ascii")
        if (bs.length != Word160Length) {
            throw new Error("slice passed as address shou have 20 byte length");
        }
        var evmAddrStrWithPrefix = bs
        // 合约账号
        if (evmAddrStrWithPrefix.slice(0,4) == contractAccountPrefixs) {
            result = evmAddressToContractAccount(bs)
        } else if  (evmAddrStrWithPrefix.slice(0,4) == contractNamePrefixs) {
            result = evmAddressToContractName(bs)
        }else {
            var buffer = Buffer.from(addr,"hex")
            result = evmAddressToXchain(buffer)
        }
        return result
    }catch (err) {
        console.log(err)
    }
    return result
}
function evmAddressToContractAccount (addr:string) {
    return accountPrefix + addr.slice(4) + "@xuper"
}
function evmAddressToContractName(addr:string) {
    var index = addr.lastIndexOf(evmAddressFiller)
    return addr.slice(index+1)
}

function evmAddressToXchain(addr:any){
    var addTyepe = []
    var addrArray = new Uint8Array(addr)
    addTyepe.push(1)
    for (var i = 0; i < addrArray.length; i++ ){
        addTyepe.push(addrArray[i])
    }
    var checkCode = DoubleSha256(addTyepe)
    var simpleCheckCode = checkCode.slice(0,4)
    for (var i = 0; i < simpleCheckCode.length; i++ ){
        addTyepe.push(simpleCheckCode[i])
    }
    return base58.encode(addTyepe)
}

// DoubleSha256 执行2次SHA256，这是为了防止SHA256算法被攻破。
function DoubleSha256(data:Number[])  {
	return UsingSha256(UsingSha256(data))
}

// UsingSha256 get the hash result of data using SHA256
function UsingSha256(data:any) {
    return sha256.array(data)
}
