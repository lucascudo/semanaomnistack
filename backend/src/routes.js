const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'olá mundo' });
});

routes.post('/users', (request, response) => {

});

module.exports = routes;