'use strict';

class RPCResponseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RPCResponseError';
    }
}

module.exports = RPCResponseError;
