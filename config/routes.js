const {register, login} = require('./users/user-routes');
const {getProj, getProjById, addProj} = require('./projects/projects-routes');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
    server.get('/api/projects', getProj);
    server.get('/api/projects/:id', getProjById);
    server.post('/api/projects', addProj);
};