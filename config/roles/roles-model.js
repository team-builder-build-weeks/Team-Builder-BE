const db = require('../../data/dbConfig')

module.exports = {
    addRole: function(role) {
        return db('roles')
            .insert(role)
            .then(([id]) => this.get(id));
    },
    getAll: function(){
        return db('roles');
    },
    getByProject: function(projectId) {
        return db('roles')
        .where('project_id', projectId)
        .then(roles => roles.map(role => {
            return {
                ...role
            };
        }));
    }
    
}



