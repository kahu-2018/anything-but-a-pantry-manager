
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('auth', table => {
    table.increments('id')
    table.string('user_name')
    table.string('email')
    table.string('hash')
    table.string('salt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('auth')
};
