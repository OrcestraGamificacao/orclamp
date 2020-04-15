const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.json({
        evento: 'CodeCamp',
        trainee: 'Jomsum'
    });
});

module.exports = routes;