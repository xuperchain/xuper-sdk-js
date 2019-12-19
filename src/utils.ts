/**
 * @file utils
 * Created by xinyi on 2019/12/19
 */

/**
 * Base58 - encode
 * @param data
 * @param alphabet
 */
export function base58Encode(
    data: Uint8Array,
    alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
): string {
    let str = '';
    const d: any[] = [];
    let c: number;
    let j: any;
    let n;

    Object.values(data).forEach(i => {
        j = 0;
        c = data[i];

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
    alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
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
