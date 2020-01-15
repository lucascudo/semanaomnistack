const env = require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(process.env['DATABASE'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(80);