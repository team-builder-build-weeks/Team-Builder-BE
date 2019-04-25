const {register, login} = require('./users/user-routes');
const {getProj, getProjById, addProj, updateProj} = require('./projects/projects-routes');
const {addRole, getRolesByProject, updateRole} = require('./roles/roles-routes');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
    
    server.get('/api/projects', getProj);
    server.get('/api/projects/:id', getProjById);
    server.post('/api/projects', addProj);
    server.put('/api/projects/:id', updateProj);
    
    server.post('/api/roles', addRole);
    server.get('/api/roles/:id', getRolesByProject);
    server.put('/api/roles/:id', updateRole);
};