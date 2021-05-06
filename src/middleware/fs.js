const fs = require('fs');
const {flagClearIpFilter} = require('../../config');

let ipFilterPath;

const setIpFilterPath = async (path) => {
    ipFilterPath = path;

    if (flagClearIpFilter) {
        await new Promise(resolve =>
            fs.appendFile(
                ipFilterPath,
                ``,
                {flag: 'w'},
                resolve
            ));
    }
};

const addIpToFilter = async (ip) => {
    await new Promise(resolve => fs.appendFile(
        ipFilterPath,
        `${ip}\n`,
        {flag: 'a'},
        resolve
    ));
};

const readAllFile = async (path) => {
    return new Promise(resolve => fs.readFile(
        path,
        resolve
    ));
};

const getIpFilterPath = () => ipFilterPath;

module.exports = {
    setIpFilterPath,
    addIpToFilter,
    getIpFilterPath,
    readAllFile,
};
