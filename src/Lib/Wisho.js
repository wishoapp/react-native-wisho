'use strict';

function Wisho(config) {
    if (!(this instanceof Wisho)) {
        return new Wisho(config);
    }

    if (typeof config === 'undefined') {
        config = {
            apiKey: null,
            secretKey: null
        }
    }
    this._config = {
        apiKey: config.apiKey || process.env.WISHO_API_KEY,
        secretKey: config.secretKey || process.env.WISHO_SECRET_KEY
    };

    this._validateWishoOptions(this._config);
}

Wisho.prototype._validateWishoOptions = function (config) {
    if (typeof config['apiKey'] === 'undefined' || config['apiKey'] === '') throw new TypeError('apiKey cannot be empty');
    if (typeof config['secretKey'] === 'undefined' || config['secretKey'] === '') throw new TypeError('secretKey cannot be empty');
};

module.exports = Wisho;
