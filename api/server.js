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

    <h3>Endpoints:</h3>
    <strong>User Endpoints</strong>
    <p>~/api/login</p>
    <p>~/api/register</p>
    <p></p>
    
    <h3>Methods</h3>
    
    <strong>User Methods</strong>
    <p>POST {username: ' ', password: ' '} to '/api/register'</p>
    <p>POST {username: ' ', password: ' ' } to '/api/login' </p>
    
    <strong>Project Methods</strong>
    <p>POST {name: ' ', description: ' '} to /api/projects to create project</p>
    <p>GET  to /api/projects returns all Projects</p>
    <p>GET to /api/projects/:id returns Projects by ID</p>
    <p>PUT to /api/projects/:id updates Projects by ID</p>
    <p>DELETE to '/api/projects/:id' for deleting projects</p>

    <strong>Role Methods</strong>
    <p>POST {name: ' ', description: ' ', project_id: 0} to /api/roles to create role</p>
    <p>GET  to /api/roles returns all Roles</p>
    <p>GET to /api/roles/:id returns Roles by ID</p>
    <p>PUT to /api/roles/:id updates Roles by ID</p>
    <p>DELETE to '/api/roles/:id' for deleting roles</p>

    `)
})

configureRoutes(server);

module.exports = server;
