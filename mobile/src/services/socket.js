import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.9', {
    autoConnect: false,
});

function connect(latitude, longitude, techs) {
    if (socket.connected) {
        return;
    }
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    socket.connect();
    socket.on('connect_error', console.log);
    socket.on('message', console.log);
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

function subscribeToNewDevs(subscriberFunction) {
    socket.on('new-dev', subscriberFunction);
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};