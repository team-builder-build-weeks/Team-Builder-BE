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
                    console.log('getById', projects)
                    if (project) {
                        return getByProject(id).then(actions => {
                            project.actions = actions;
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
        // .then(res => res);
        // .then(([id]) => this.getById(id));
    },
}
