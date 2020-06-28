/**
 * @file error
 * Created by xinyi on 2020/1/2
 */

interface ErrorInterface {
    code: number;
    name: string;
    timestamp: number;
    message: string;
    stack?: string;
    payload?: Error;
}

function XuperError(
    errorCode: number | string,
    message: string,
    name = 'Xuper SDK error',
    isFront = true,
    payload?: Error
): ErrorInterface {
    return {
        code: parseInt(`9${+isFront}${errorCode.toString().padStart(5, '0')}`, 10),
        timestamp: Date.now(),
        stack: new Error().stack,
        name,
        message,
        payload
    };
}

XuperError.prototype = Error;

const Errors = {
    TIMEOUT: XuperError(1001, 'Timeout'),
    NETWORK_ERR: XuperError(1002, 'Network error'),
    INVALID_CONFIGURATION: XuperError(1003, 'Invalid configuration'),
    UTXO_NOT_ENOUGH: XuperError(5001, 'Utxo is not enough'),
    INVALID_PARAMS: XuperError(5002, 'Invalid params'),
    ACCOUNT_NOT_EXIST: XuperError(6001, 'Account not exist')
};

export default Errors;
