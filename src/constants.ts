/**
 * @file (constants)
 * Created by SmilingXinyi <smilingxinyi@gmail.com> on 2020/7/2
 */

export const VERSION = 1;

/**
 * Mnemonic language
 */
export enum Language {
    SimplifiedChinese = 'SimplifiedChinese',
    English = 'English'
}

/**
 * Mnemonic strength
 */
export enum Strength {
    Easy = 120,
    Middle = 184,
    Hard = 248
}

/**
 * Cryptography
 */
export enum Cryptography {
    EccFIPS = 1
    // Todo: EccGM: 2
}
