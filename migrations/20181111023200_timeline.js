
exports.up = function(knex, Promise) {
    return knex.schema.createTable('timeline', function (table) {
        table.increments('id')
        table.string('date')
        table.string('country')
        table.string('title')
        table.string('event')
        table.string('source')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('timeline')
};
