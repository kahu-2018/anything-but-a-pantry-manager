exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('image')
    table.string('dietary_restrictions')
    table.integer('auth_id')
    table.string('user_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
