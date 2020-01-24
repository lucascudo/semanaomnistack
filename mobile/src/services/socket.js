import socketio from 'socket.io-client';

const socket = socketio('http://172.20.10.242:8081', {
    autoConnect: false,
});

function connect() {
    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
};