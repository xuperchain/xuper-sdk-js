/**
 * @file utils
 * Created by xinyi on 2019/12/19
 */

/**
 * @ignore
 */

import {PrivateKeyModel, PublicKeyModel} from './interfaces';

/**
 * Environment detection
 */
export function isNode(): boolean {
    let nodeEnv = false;
    if (typeof process === 'object') {
        if (typeof process.versions === 'object') {
            if (typeof process.versions.node !== 'undefined') {
                nodeEnv = true;
            }
        }
    }
    return nodeEnv;
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

    // @ts-ignore
    for (const i: number in data) {
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
    }

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

/**
 * JSON stringify
 * @param t
 */
export function jsonEncode(t: any): string {
    if (typeof t === 'undefined') return `${JSON.stringify(null)}\n`;
    return `${JSON.stringify(t)}\n`;
}

/**
 * Deep equal
 * @param x
 * @param y
 */
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
 * Nonce
 */
export function getNonce(): string {
    let rs = '';
    if (isNode()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
        const crypto = require('crypto');
        rs = crypto.randomFillSync(new Uint32Array(1))[0].toString();
    } else {
        rs = crypto.getRandomValues(new Uint32Array(1))[0].toString();
    }
    return (~~(Date.now() / 1000).toString()) + rs;
}

/**
 * Converting a public key or private key to a string
 * @param key
 */
export function publicOrPrivateKeyToString(key: PrivateKeyModel | PublicKeyModel): string {
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
 * Post request
 * @param t target host
 * @param b body object
 */
export async function postRequest(t: string, b: object): Promise<any> {
    return fetch(t, {
        method: 'POST',
        body: JSON.stringify(b)
    }).then(
        response => {
            if (!response.ok) {
                return response.json().then(res => {
                    throw res;
                });
            }
            return response.json();
        }
    );
}

/**
 * Camel to underline
 * @param tar
 */
export function convert(tar: any): any {
    let format: any = {};

    if (tar instanceof Array) {
        const newTar = [...tar];
        format = Object.assign([], newTar.map(v => convert(v)));
    } else if (tar instanceof Object) {
        const newTar = {...tar};
        Object.keys(newTar).forEach(key => {
            const value = newTar[key];
            format[
                /^[a-z]/.test(key)
                    ? key.replace(/([A-Z]{1})/g, '_$1').toLowerCase()
                    : key
            ] = convert(value);
        });
    } else {
        format = tar;
    }

    return format;
}

if (isNode()) {
    // @ts-ignore
    global.btoa = (s: string) => Buffer.from(s).toString('base64');
    // @ts-ignore
    global.atob = (e: string) => Buffer.from(e, 'base64').toString();
    // @ts-ignore
    // eslint-disable-next-line global-require
    global.fetch = require('node-fetch');
}
