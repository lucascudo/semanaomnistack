import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://192.168.15.4',
});

export default api;