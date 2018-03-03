
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userFavourites', table => {
    table.integer('user_id')
    table.integer('recipe_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userFavourites')
};
