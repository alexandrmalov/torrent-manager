const path = require('path');
const childProcess = require('child_process');
let {torrentClientPath} = require('../../config');
const log = require('./log');
const {readAllFile} = require('./fs');

const findIpFilterPath = async () => {
    if (!torrentClientPath) {
        torrentClientPath = await getProcessPath();
    }

    const ipFilterPath = path.join(torrentClientPath, '..', 'ipfilter.dat');
    if (torrentClientPath.endsWith('btweb.exe')) {
        await loadLocalApiToken(torrentClientPath);
    }

    log.info(`IP FILTER DIRECTORY:\n${ipFilterPath}`, '\n');

    return ipFilterPath;
};

const loadLocalApiToken = async (path) => {
    const userConfPath = path.join(torrentClientPath, '..', 'users.conf');
    const userConfData = await readAllFile(userConfPath);

    console.log('userConfData', userConfData);
};

const getProcessPath = async () => {
    try {
        childProcess.execSync(`chcp 65001`).toString();
        const allProcess = childProcess.execSync(`wmic process get executablepath`).toString();
        childProcess.execSync(`chcp 866`).toString();

        const processPath = allProcess
            .split('\n')
            .map(str => str.trim())
            .find(str =>
                str.endsWith('uTorrent.exe') ||
                str.endsWith('BitTorrent.exe') ||
                str.endsWith('btweb.exe')
            );

        if (!processPath) throw Error('Process not found: uTorrent, BitTorrent, btweb');

        return processPath;
    } catch (error) {
        log.info(error);
        log.info('ERROR: Process not found.\nВНИМАНИЕ!!!\nПроцесс uTorrent или BitTorrent не найден, запустите торрент клиент и повторите попытку. Если это не поможет то укажите путь до клиента в config.js');
    }
};

module.exports = {
    findIpFilterPath,
};
