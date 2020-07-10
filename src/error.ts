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

XuperError.or = (errors: ErrorInterface[]) => {
    const oriError = errors[0];
    oriError.message = errors.map(error => error.message).join(' or ');
    return oriError;
};

XuperError.and = (errors: ErrorInterface[]) => errors.join(' and ');

XuperError.prototype = Error;

export {
    XuperError
};

const Errors = {
    ACCOUNT_NOT_EXIST: XuperError(6001, 'Account not exist'),
    PARAMETER_ERROR: XuperError(6002, 'Parameter error')
};

export default Errors;
