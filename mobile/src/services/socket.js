import socketio from 'socket.io-client';

const socket = socketio('http://172.20.10.242:8081', {
    autoConnect: false,
});

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    socket.connect();
    socket.on('message', console.log);
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