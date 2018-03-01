
exports.up = function(knex, Promise) {
  return knex.schema.createTable('auth', table => {
    table.increments('id')
    table.string('user_name')
    table.string('email')
    table.string('hash')
    table.string('salt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auth')
};
