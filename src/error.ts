/**
 * @file error
 * Created by xinyi on 2020/1/2
 */

import {ErrorOptions} from './types';

interface ErrorInterface {
    code: number;
    name: string;
    timestamp: number;
    message: string;
    stack?: string;
    payload?: Error;
}

const defaultOpts: ErrorOptions = {
    name: 'Xuper SDK Error',
    isFront: true
};

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

class XuperError1 extends Error {
    payload: Error | string | undefined;
    errorCode: number | string;

    constructor(
        errorCode: number | string,
        message = '',
        payload?: Error | string,
        opts?: ErrorOptions
    ) {
        super(message);
        const {name} = Object.assign({}, defaultOpts, opts);
        this.name = name!;
        this.payload = payload;
        this.errorCode = errorCode;
        this.stack = XuperError1.fixStackString(this.stack, '\n', opts?.stackIgnore);
    }

    static template(
        errorCode: number | string,
        message: string,
        payload?: Error | string,
        opts?: ErrorOptions
    ) {
        const tmpOpts = {
            stackIgnore: [1, 3]
        };
        if (arguments.length > 2 && !opts) {
            // @ts-ignore
            opts = Object.assign({}, tmpOpts, payload);
            // @ts-ignore
            payload = null;
        }
        opts = Object.assign({}, tmpOpts, opts);
        return new this(errorCode, message, payload, opts);
    }

    private static fixStackString(stack = '', char = '\n', stackLine?: [number, number]): string {
        const [ignoreStart, ignoreCount] = stackLine || [1, 1];
        const stackArr = stack.split(char);
        stackArr.splice(ignoreStart, ignoreCount);
        return stackArr.join(char);
    }

    // Todo: fix error.stack
    /*
    static new(
        errorCode: number | string,
        message: string,
        payload?: Error | string,
        opts?: ErrorOptions
    ): XuperError1 {
        const tmpOpts = {
            stackIgnore: [1, 2]
        };
        return new this(errorCode, message, payload, Object.assign({}, tmpOpts, opts));
    }
     */
}

export {
    XuperError,
    XuperError1
};

const Errors = {
    ACCOUNT_NOT_EXIST: XuperError(6001, 'Account not exist'),
    PARAMETER_ERROR: XuperError(6002, 'Parameter error'),
    UTXO_NOT_ENOUGH: XuperError(1001, 'Utxo is not enough'),
    PARAMETER_EMPTY_FUNC: (params: string | string[] = []) => {
        if (typeof params === 'string') {
            params = [params];
        }
        const message =
            `Parameter ${params.length > 0 ? `\'${params.join(', ')}\' ` : ''}is empty`;
        return XuperError1.template(6002, message);
    }

};

export default Errors;
