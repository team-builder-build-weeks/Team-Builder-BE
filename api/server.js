const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h1>Api Portal</h1>
    <h3>Endpoint:</h3>
    <p></p>
    <p>~/api/login</p>
    <p>~/api/register</p>
    <p></p>
    <h3>Methods </h3>
    <p>POST {username: '', password ''} to '/api/register'</p>
    <p>POST {username: '', password: '' } to '/api/login' </p>
    `)
})

configureRoutes(server);

module.exports = server;
