
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('roles', tbl => {
            tbl.increments('id');

            tbl
            .string('name', 128)
            .notNullable();

            tbl
            .text('description');

            tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        })
};

exports.down = function(knex, Promise) {

};
