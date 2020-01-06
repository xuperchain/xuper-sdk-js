/**
 * @file test file - account sdk
 * Created by xinyi on 2019/11/27
 */

/* eslint-disable global-require,@typescript-eslint/no-var-requires */

require('dotenv').config();
const fs = require('fs');
const NodeEnvironment = require('jest-environment-jsdom-fourteen');

class CustomEnvironment extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
        this.testPath = context.testPath;
        this.docblockPragmas = context.docblockPragmas;
        this.global.process.title = 'jsdom';

        // TextEncoder & TextDecoder
        const {TextEncoder, TextDecoder} = require('util');
        this.global.TextEncoder = TextEncoder;
        this.global.TextDecoder = TextDecoder;

        // crypto module
        const nodeCrypto = require('crypto');
        this.global.crypto = {
            getRandomValues(buffer) {
                return nodeCrypto.randomFillSync(buffer);
            }
        };

        this.global.file = Uint8Array.from(fs.readFileSync(`${__dirname}/../contract_code/counter.wasm`));
    }
}

module.exports = CustomEnvironment;
