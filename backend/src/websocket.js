const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);
    io.on('connect', (socket) => {
        socket.emit('message', 'Hello World');
    });
};