const fetch = require('node-fetch');
const log = require('../log');
const config = require('../../../config');

const getBttInfo = async () => {
    return await fetch(`http://127.0.0.1:49508/api/revenue/hourly?revenue_type=earning`)
        .then(res => {
            return res.json();
        });
};

module.exports = {
    getBttInfo,
};
