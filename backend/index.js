const express = require('express');
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'olá mundo' });
});
app.listen(80);
