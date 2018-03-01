
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('userRestrictions', table => {
    table.integer('user_id')
    table.integer('restriction_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userRestrictions')
};
