import {EvmToXchainAddr, XchainAddrToEvm} from '../src/utils';

describe('utils', () => {
    test('xchainToEvm', async () => {
        console.log(XchainAddrToEvm('XC1111111111111111@xuper'));
        console.log(XchainAddrToEvm('ULuqhymLPGidfihUb683i2TH4qtaqZ2Dz'));
        console.log(XchainAddrToEvm('Test'));
    });
    test('EvmToXChain', async () => {
        console.log(EvmToXchainAddr('3131313231313131313131313131313131313131'));
        console.log(EvmToXchainAddr('2BEF68690AE24553824BA37C003C2B9067665F81'));
        console.log(EvmToXchainAddr('313131312D2D2D2D2D2D2D2D2D2D2D2D54657374'));
    });
});