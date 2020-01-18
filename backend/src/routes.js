const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'olá mundo' });
});

routes.get('/devs', DevController.index);
routes.get('/devs/search', DevController.search);
routes.get('/devs/:_id', DevController.show);
routes.delete('/devs/:_id', DevController.destroy);
routes.post('/devs', DevController.store);
routes.put('/devs/:_id', DevController.update);

module.exports = routes;