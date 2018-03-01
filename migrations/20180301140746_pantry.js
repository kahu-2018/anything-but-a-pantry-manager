
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('pantry', table => {
    table.increments('id')
    table.string('name_of_food')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pantry')
};
