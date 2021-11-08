/**
 * Business exceptions
 */
export class ManagerException {
    constructor(
        private readonly code: number,
        private readonly message: string,
        private readonly detail?: string,
    ) { }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }

    getDetail() {
        return this.detail;
    }
}

/**
 * parametric anomaly
 */
export class ParamException extends ManagerException {
    constructor(message: string = 'parameter error', detail?: string) {
        super(400, message, detail);
    }
}

/**
 * Permission exception
 */
export class AuthException extends ManagerException {
    constructor(message: string = 'no access', detail?: string) {
        super(403, message, detail);
    }
}