const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const apiRouter = require('./routes/api');
const cors = require('cors');
require('./db')

//server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit:'50mb'}))
server.listen(3000, () => {
    console.log('Server Is running!')
})
server.use('/api',apiRouter);
