const db = require('../../data/dbConfig')

module.exports = {
    addRole: function(role) {
        return db('roles')
            .insert(role, 'id')
            .then(([id]) => this.getAll(id));
    },
    getAll: function(){
        return db('roles');
    },
    getByProject: function(projectId) {
        return db('roles')
        .where('project_id', projectId)
        .then(roles => roles.map(role => {
            console.log('getRoleByProject', role)
            return {
                ...role
            };
        }));
    },
    updateRole: function(id, body){
        return db('roles')
            .where({id})
            .first()
            .update(body)
            .then(count => {
                if(count > 0){
                    return db('roles')
                    .where({id})
                    .first()
                } else {
                    return null
                }
            })
    },
    deleteRole: function(id) {
        return db('roles')
        .where({id})
        .del()
    }
}



