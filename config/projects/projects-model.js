const db = require('../../data/dbConfig');

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
                        return getProjectActions(id).then(actions => {
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
        .then(([id]) => this.get(id));
    },
    
}




