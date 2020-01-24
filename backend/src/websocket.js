const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);
    io.on('connect', (socket) => {
        console.log(socket.id);
        console.log(socket.handshake.query);
        socket.emit('message', 'Hello World');
    });
};