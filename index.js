#!/usr/bin/env node

const dgram = require('dgram')
const os = require('os')
    /**
     * define fetch ip methods
     */
const fetch_ip = (dns) => {
    return new Promise((resolve, reject) => {
        if (process.version.split(".")[0].replace('v') < 12) {
            reject('node.js version must be >= 12.0.0')
            return
        }
        const socket = dgram.createSocket('udp4')
        socket.connect(80, dns || '4.2.2.1', e => {
            resolve(socket.address().address)
            socket.close()
        })
        socket.on('error', e => resolve('127.0.0.1'))
    })
}

/**
 * is cli show ip?
 */
const [, , show] = process.argv

/**
 * show？
 */
if (show === 'true') {
    fetch_ip().then(ip => {
            if (process.platform === 'win32') {
                console.log('\u001b[32m' + ip + '\u001b[0m')
                return
            }
            console.log('\033[32m' + ip + '\033[39m')
        })
        .catch(e => {
            console.log(e)
        })
    return
}

module.exports = fetch_ip