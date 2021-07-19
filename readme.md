# real_ip package and cli tool

## support nodejs version

version >= 12.0.0

## how to use?

### as a cli tool

1. `npm i -g @fuyoo/real_ip`

2. `execute command ip show`

### as a node.js package

1. `npm i @fuyoo/real_ip`

2. `require this package`
    ```javascript
    const real_ip = require('@fuyoo/real_ip');
    (async () => {
       const res = await real_ip();
       console.log(res);
    })
    ```

## principle

this package use udpV4 to connect dns ip addresses.

when connect successed we close this connection.

get the used local ip addres.

