/**
 * @file test file - account sdk
 * Created by xinyi on 2019/11/27
 */
require('dotenv').config();
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
        let nodeCrypto = require('crypto');
        this.global.crypto = {
            getRandomValues: function (buffer) {
                return nodeCrypto.randomFillSync(buffer);
            }
        };
    }
}

module.exports = CustomEnvironment;
