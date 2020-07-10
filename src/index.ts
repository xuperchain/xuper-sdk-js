/**
 * @file Xuper SDK
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/6/2
 */

import XuperSDKInterface from './interfaces';
import * as Requests from './requests';
import XuperErrors, {XuperError} from './error';
import Account from './account';
import {Cryptography, Language, Strength} from './constants';
import {AccountModel, Options} from './types';

export default class XuperSDK implements XuperSDKInterface {
    static instance: XuperSDK;
    private options: Options;
    private account?: AccountModel;
    private accountInstance: Account;

    public static getInstance(opts: Options): XuperSDK {
        if (!this.instance) {
            this.instance = new this(opts);
        }
        return this.instance;
    }

    constructor(opts: Options) {
        this.options = {...opts};
        this.accountInstance = new Account();
    }

    checkStatus(): Promise<any> {
        const node = this.options.node;
        const body = {
            bcname: this.options.chain
        };
        return Requests.getStatus(node, body);
    }

    checkAddress(address?: string): boolean {
        const addr = address || this.account?.address;

        if (addr) {
            return this.accountInstance.checkAddress(addr);
        }
        else {
            throw XuperError.or([XuperErrors.ACCOUNT_NOT_EXIST, XuperErrors.PARAMETER_ERROR]);
        }
    }

    create(
        language: Language = Language.SimplifiedChinese,
        strength: Strength = Strength.Easy,
        cryptography: Cryptography = Cryptography.EccFIPS
    ): AccountModel {
        return this.accountInstance.create(language, strength, cryptography);
    }

    recover(
        mnemonic: string,
        language: Language = Language.SimplifiedChinese,
        cryptography: Cryptography = Cryptography.EccFIPS
    ): AccountModel {
        if (mnemonic) {
            return this.accountInstance.recover(mnemonic, language, cryptography);
        }
        else {
            throw XuperErrors.PARAMETER_ERROR;
        }
    }

    import(password: string, privateKeyStr: string): AccountModel {

    }




    // checkAddress(address: string): boolean {
    //
    // }

    // getBalanceDetail(address?: string): Promise<any> {
    // const node = this.options.node;
    // let addr = address;

    /*
    body: JSON.stringify({
            address: address || this.accountModel!.address,
            tfds: [{
                bcname: this.options.chain
            }]
        })
     */
    // return undefined;
    // }

    /*
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
     */
}
