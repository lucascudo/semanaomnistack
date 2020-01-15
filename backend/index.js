const express = require('express');
const mongoose = require('mongoose');
const env = require('.env')

const app = express();
mongoose.connect(env('DATABASE'), {
    useNewUserParser: true,
    useUnifiedTopology: true,
});

app.get('/', (request, response) => {
    return response.json({ message: 'olá mundo' });
});

app.post('/users', (request, response) => {

});

app.listen(80);