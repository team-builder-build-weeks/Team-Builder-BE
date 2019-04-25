const {register, login} = require('./users/user-routes');
const {getProj, getProjById, addProj, updateProj, delProj} = require('./projects/projects-routes');
const {addRole, getRolesByProject, updateRole, delRole} = require('./roles/roles-routes');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
    
    server.get('/api/projects', getProj);
    server.get('/api/projects/:id', getProjById);
    server.post('/api/projects', addProj);
    server.put('/api/projects/:id', updateProj);
    server.delete('/api/projects/:id',delProj)
    
    server.post('/api/roles', addRole);
    server.get('/api/roles/:id', getRolesByProject);
    server.put('/api/roles/:id', updateRole);
    server.delete('/api/roles/:id', delRole)
};