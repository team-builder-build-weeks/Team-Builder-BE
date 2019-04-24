const {register, login} = require('./users/user-routes');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
};