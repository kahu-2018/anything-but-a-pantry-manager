
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dietaryRestrictions', table => {
    table.increments('id')
    table.string('restricted_food')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dietaryRestrictions')
};
