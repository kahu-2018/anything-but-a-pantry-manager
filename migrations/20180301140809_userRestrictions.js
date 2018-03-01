
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userRestrictions', table => {
    table.integer('user_id')
    table.integer('restriction_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userRestrictions')
};
