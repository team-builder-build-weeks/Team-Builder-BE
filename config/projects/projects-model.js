const db = require('../../data/dbConfig');
const {getByProject} = require('../roles/roles-model');

module.exports = {
    get: function() {
        return db('projects')
    },
    getById: function(id) {
        return db('projects')
                .where({ id })
                .first()
                .then(project => {
                    if (project) {
                        return getByProject(id).then(roles => {
                            project.roles = roles;
                            return project;
                        });
                    } else {
                        return null;
                    }
                })
    },
    insert: function(project) {
        return db('projects')
        .insert(project)
        // .then(([id]) => this.get(id));
    },
    updateProject: function(id, body){
        return db('projects')
            .where({id})
            .first()
            .update(body)
            .then(count => {
                if(count > 0){
                    return db('projects')
                    .where({id})
                    .first()
                } else {
                    return null
                }
            })
    },
    deleteProj: function(id){
        return db('projects')
            .where({id})
            .del()
    }
}




