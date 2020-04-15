/**
 * @file Xuper Account
 * Created by xinyi on 2019/12/19
 */

import BN from 'bn.js';
import sha256 from 'sha256';
import pbkdf2 from 'pbkdf2';
import aesjs from 'aes-js';
import {ec as EC} from 'elliptic';
import {RIPEMD160} from 'ripemd160-min/dist-umd';
import {Cryptography, Language, Strength} from './constants';
import {
    base58Decode,
    base58Encode,
    deepEqual,
    isBrowser,
    publicOrPrivateKeyToString,
    stringToPublicOrPrivateKey
} from './utils';
import wordlist from './wordlist.json';
import {
    AccountInerface, AccountModel, PrivateKeyModel, PublicKeyModel
} from './interfaces';

/**
 * Class Account
 */
export default class Account implements AccountInerface {
    private last4BitsMask: BN = new BN(15);

    /**
     * Create new account
     * @param language - mnemonic language
     * @param strength - mnemonic strength
     * @param cryptography - cryptography
     */
    create(language: Language, strength: Strength, cryptography: Cryptography): AccountModel {
        const entropyByte = this.generateEntropy(strength);

        const cryptographyBit = new Uint8Array(1);
        cryptographyBit[0] = cryptography;

        const reservedBit = new Uint8Array(1);
        reservedBit[0] = 0;

        const reservedInt = new BN(reservedBit).and(this.last4BitsMask);

        let flagInt = new BN(cryptographyBit).and(this.last4BitsMask).shln(4);

        flagInt = flagInt.xor(reservedInt);

        const newEntropyByteSliceBuffer = new ArrayBuffer(entropyByte.length
            + new Uint8Array([flagInt.toNumber()]).byteLength);
        const newEntropyByteSlice = new Uint8Array(newEntropyByteSliceBuffer);

        newEntropyByteSlice.set(entropyByte);
        newEntropyByteSlice.set([Number(flagInt.toString(10))], entropyByte.length);

        const mnemonic = this.generateMnemonic(newEntropyByteSlice, language);
        const password = 'jingbo is handsome!';
        const seed = this.generateSeed(mnemonic, password, 40, language);

        // Todo: cryptography, default elliptic
        const curve = new EC('p256');
        const privateKey: PrivateKeyModel = this.generateKeyBySeed(curve, seed);
        const publicKey: PublicKeyModel = {
            X: privateKey.X,
            Y: privateKey.Y,
            Curvname: privateKey.Curvname
        };

        const address = this.generateAddress(publicKey, cryptography);

        return {
            address,
            mnemonic,
            privateKey,
            publicKey
        };
    }

    /**
     * Revert account with mnemonic words
     * @param mnemonic
     * @param language
     * @param cryptography
     */
    revert(mnemonic: string, language: Language, cryptography: Cryptography): AccountModel {
        const password = 'jingbo is handsome!';
        const seed = this.generateSeed(mnemonic, password, 40, language);

        const curve = new EC('p256');

        const privateKey: PrivateKeyModel = this.generateKeyBySeed(curve, seed);
        const publicKey: PublicKeyModel = {
            X: privateKey.X,
            Y: privateKey.Y,
            Curvname: privateKey.Curvname
        };

        const address = this.generateAddress(publicKey, cryptography);

        return {
            address,
            mnemonic,
            privateKey,
            publicKey
        };
    }

    /**
     * Import private key
     * @param password
     * @param privateKeyStr
     */
    import(password: string, privateKeyStr: string): AccountModel {
        const decryptStr = this.decryptPrivateKey(password, privateKeyStr);
        const privateKeyObj = stringToPublicOrPrivateKey(decryptStr);

        const privateKey: PrivateKeyModel = {
            D: privateKeyObj.D,
            X: privateKeyObj.X,
            Y: privateKeyObj.Y,
            Curvname: privateKeyObj.Curvname
        };

        const publicKey: PublicKeyModel = {
            X: privateKey.X,
            Y: privateKey.Y,
            Curvname: privateKey.Curvname
        };

        const address = this.generateAddress(publicKey, Cryptography.EccFIPS);

        return {
            address,
            privateKey,
            publicKey
        };
    }

    /**
     * Check address is valid
     * @param address
     */
    checkAddress(address: string): boolean {
        try {
            const decode = base58Decode(address);
            if (decode.length < 1) {
                return false;
            }
            const simpleCheckCode = new Uint8Array(decode.slice(decode.length - 4));
            const checkContent = decode.slice(0, decode.length - 4);
            const checkCode = sha256.x2(Array.from(checkContent), {asBytes: true});
            const realCheckCode = new Uint8Array(checkCode.slice(0, 4));
            return (deepEqual(simpleCheckCode, realCheckCode));
        } catch (e) {
            return false;
        }
    }

    /**
     * Check mnemonic is valid
     * @param mnemonic
     * @param language
     */
    checkMnemonic(mnemonic: string, language: Language): boolean {
        const words = wordlist[language];
        return mnemonic.split(' ').every(w => words.indexOf(w) > -1);
    }

    private generateEntropy(strength: Strength) {
        if ((strength + 8) % 32 !== 0 || strength + 8 < 128 || strength + 8 > 256) {
            throw 'Invalid entropy length';
        }

        if (!isBrowser()) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
            const crypto = require('crypto');
            return crypto.randomFillSync(new Uint8Array(strength / 8));
        }

        return crypto.getRandomValues(new Uint8Array(strength / 8));
    }

    private generateMnemonic(entropy: ArrayBuffer, language: Language) {
        const entropyBitLength = entropy.byteLength * 8;

        const invalidEntropyLength = new Error('Entropy length must within [120, 248] and after +8 be multiples of 32');

        if ((entropyBitLength) % 32 !== 0 || entropyBitLength < 128 || entropyBitLength > 256) {
            throw invalidEntropyLength;
        }

        const wordList = this.getWordListByLanguage(language);

        const checksumBitLength = entropyBitLength / 32;

        const sentenceLength = (entropyBitLength + checksumBitLength) / 11;

        const entropyWithChecksum = this.addChecksum(entropy);

        const words = new Array(sentenceLength);

        const Last11BitsMask = new BN(2047);

        let entropyInt = entropyWithChecksum;

        for (let i = sentenceLength - 1; i >= 0; i--) {
            const word = entropyInt.and(Last11BitsMask);

            entropyInt = entropyInt.shrn(11);

            words[i] = wordList[word.toNumber()];
        }

        return words.join(' ');
    }

    private getWordListByLanguage(language: Language) {
        if (!wordlist[language]) {
            throw new Error('This language has not been supported yet');
        }
        return wordlist[language];
    }

    private addChecksum(data: any) {
        const hashByte = sha256(data);

        const firstChecksumByte = new BN(hashByte.toString().substr(2, 2), 16);

        const checksumBitLength = data.length / 4;

        let dataBigInt = new BN(data);

        const BigZero = new BN(0);
        const BigOne = new BN(1);
        const BigTwo = new BN(2);

        for (let i = 0; i < checksumBitLength; i++) {
            dataBigInt = dataBigInt.mul(BigTwo);
            if ((firstChecksumByte.and(new BN(1 << 7 - i)).gt(BigZero))) {
                dataBigInt = dataBigInt.or(BigOne);
            }
        }

        return dataBigInt;
    }

    private generateSeed(mnemonic: string, password: string, keyLen: number, language: Language) {
        const wordList = this.getWordListByLanguage(language);
        const originMnemonic = mnemonic.split(' ').map(word => wordList.indexOf(word));

        const mnemonicBitSize = originMnemonic.length * 11;

        const checksumBitSize = mnemonicBitSize % 32;

        let bnRes = new BN(0);
        const bn2048 = new BN(2048);
        originMnemonic.forEach(v => {
            const bb = new BN(v);
            bnRes = bnRes.mul(bn2048);
            bnRes = bnRes.add(bb);
        });

        const checksumModulo = new BN(2).pow(new BN(checksumBitSize));

        const entropy = bnRes.div(checksumModulo);

        const entropyByteSize = (mnemonicBitSize - checksumBitSize) / 8;
        const fullByteSize = entropyByteSize + 1;


        const entropyBytes = entropy.toArray().slice(0, entropyByteSize);
        const entropyWithChecksumBytes = bnRes.toArray().slice(0, fullByteSize);

        const bn = this.addChecksum(entropyBytes).toString(10);
        const newBN = new BN(bn);


        if (JSON.stringify(newBN.toArray().slice(0, fullByteSize))
            !== JSON.stringify(entropyWithChecksumBytes)) {
            throw 'bug';
        }

        const salt = `mnemonic${password}`;
        return pbkdf2.pbkdf2Sync(mnemonic, salt, 2048, keyLen, 'sha512');
    }

    decryptPrivateKey(password: string, keyStr: string) {
        const bytes = atob(keyStr).split('').map(s => s.charCodeAt(0));
        const blockSize = 16;
        const key = sha256.x2(password, {asBytes: true});
        const padding = blockSize - (bytes.length % blockSize);
        bytes.concat(Array(padding).fill(padding));
        // eslint-disable-next-line new-cap
        const aesCbc = new aesjs.ModeOfOperation.cbc(key, key.slice(0, blockSize));
        let decryptedBytes = aesCbc.decrypt(bytes);
        const unpadding = decryptedBytes[decryptedBytes.length - 1];
        if (decryptedBytes.length - unpadding <= 0) {
            throw 'password error';
        }
        decryptedBytes = decryptedBytes.slice(0, decryptedBytes.length - unpadding);
        const td = new TextDecoder();
        return td.decode(decryptedBytes);
    }

    encryptPrivateKey(password: string, privateKey: PrivateKeyModel) {
        const keyStr = publicOrPrivateKeyToString(privateKey);
        const te = new TextEncoder();
        const keyBytes: Uint8Array = te.encode(keyStr);
        const blockSize = 16;
        const key = sha256.x2(password, {asBytes: true});
        const padding = blockSize - (keyBytes.length % blockSize);
        const theBytes = Array.from(keyBytes).concat(Array(padding).fill(padding));
        // eslint-disable-next-line new-cap
        const aesCbc = new aesjs.ModeOfOperation.cbc(key, key.slice(0, blockSize));
        const result = aesCbc.encrypt(theBytes);
        const ts = Array.from(result).map((s: number) => String.fromCharCode(s));
        return ts.join('');
    }

    private generateKeyBySeed(curve: EC, seed: any): PrivateKeyModel {
        const key = curve.genKeyPair();
        const pub = key.getPublic();
        let k = new BN(seed);
        const keyN = key.ec.n;
        const one = new BN(1);
        if (!keyN) {
            throw 'Generate seed faild';
        }
        const n = keyN.sub(one);
        k = k.mod(n);
        k = k.add(one);

        const ec = new EC('p256');
        const bigD = new BN(k);

        const privKey = ec.keyFromPrivate(bigD.toArray());

        const pubXY = privKey.getPublic();

        return {
            Curvname: 'P-256',
            D: k.toString(10),
            X: pubXY.getX().toString(10),
            Y: pubXY.getY().toString(10)
        };
    }

    private generateAddress(publicKey: PublicKeyModel, cryptography: Cryptography) {
        const flagByte = [4];
        const xBytes = new BN(publicKey.X).toArray();
        const yBytes = new BN(publicKey.Y).toArray();

        const data = flagByte.concat(xBytes).concat(yBytes);

        const outputSha256 = sha256(data, {asBytes: true});

        const createRipemd160 = new RIPEMD160();

        const outputRipemd160 = createRipemd160.update(outputSha256).digest();

        const outputRipemd160Buf = new Uint8Array(outputRipemd160.length + 1);

        outputRipemd160Buf[0] = cryptography;

        outputRipemd160Buf.set(outputRipemd160, 1);
        const checkCode = sha256.x2(Array.from(outputRipemd160Buf), {asBytes: true});

        const simpleCheckCode = checkCode.slice(0, 4);

        const checkCodeBuf = new Uint8Array(outputRipemd160Buf.length + simpleCheckCode.length);

        checkCodeBuf.set(outputRipemd160Buf, 0);
        checkCodeBuf.set(simpleCheckCode, outputRipemd160Buf.length);

        return base58Encode(checkCodeBuf);
    }
}
