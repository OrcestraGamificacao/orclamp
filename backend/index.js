const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento: 'CodeCamp',
        trainee: 'Johnson'
    });
});
app.listen(3333);
