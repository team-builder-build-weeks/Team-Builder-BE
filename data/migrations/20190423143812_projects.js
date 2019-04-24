
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('_id');

            tbl
            .string('name', 128)
            .notNullable();

            tbl
            .text('description')
            .notNullable()

        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
