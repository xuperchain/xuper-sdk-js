import {XchainAddrToEvm} from '../src/utils';

describe('utils', () => {
    test('xchainToEvm', async () => {
        console.log(XchainAddrToEvm('XC1111111111111111@xuper'));
        console.log(XchainAddrToEvm('ULuqhymLPGidfihUb683i2TH4qtaqZ2Dz'));
        console.log(XchainAddrToEvm('Test'));
    });
});