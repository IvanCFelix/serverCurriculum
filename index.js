const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const apiRouter = require('./routes/api');
require('./db')


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(3000, () => {
    console.log('Server Is running!')
})

server.use('/api',apiRouter);

