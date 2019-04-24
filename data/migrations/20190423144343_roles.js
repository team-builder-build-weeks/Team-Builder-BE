
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('roles', tbl => {
            tbl.increments('role_id');

            tbl
            .string('name', 128)
            .notNullable();

            tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');


        })
};

exports.down = function(knex, Promise) {

};
