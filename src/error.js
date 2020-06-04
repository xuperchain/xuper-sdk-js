"use strict";
/**
 * @file error
 * Created by xinyi on 2020/1/2
 */
exports.__esModule = true;
function XuperError(errorCode, message, name, isFront, payload) {
    if (name === void 0) { name = 'Xuper SDK error'; }
    if (isFront === void 0) { isFront = true; }
    return {
        code: parseInt("9" + +isFront + errorCode.toString().padStart(5, '0'), 10),
        timestamp: Date.now(),
        stack: new Error().stack,
        name: name,
        message: message,
        payload: payload
    };
}
XuperError.prototype = Error;
var Errors = {
    TIMEOUT: XuperError(1001, 'Timeout'),
    NETWORK_ERR: XuperError(1002, 'Network error'),
    INVALID_CONFIGURATION: XuperError(1003, 'Invalid configuration'),
    UTXO_NOT_ENOUGH: XuperError(5001, 'Utxo is not enough'),
    INVALID_PARAMS: XuperError(5002, 'Invalid params'),
    ACCOUNT_NOT_EXIST: XuperError(6001, 'Account not exist')
};
exports["default"] = Errors;
