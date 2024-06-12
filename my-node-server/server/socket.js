
const ioClient = require('socket.io-client');
const controller = require('@controllers/oee/controller')

const socketPHPUrl  = process.env.SOCKET_PHP_URL;
const socketClient = ioClient.connect(socketPHPUrl, {reconnect: true});

module.exports = socketClient
