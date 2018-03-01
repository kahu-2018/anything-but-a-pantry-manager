
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pantry', table => {
    table.increments('id')
    table.string('name_of_food')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pantry')
};
