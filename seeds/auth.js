const {hashSync} = require('bcrypt')
const saltRounds = 13

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(function () {
      // Inserts seed entries
      return knex('auth').insert([
        {id: 1, user_name: 'kubo', email: 'kubo@eda.com', hash: hashSync('Cute', saltRounds)},
        {id: 17, user_name: 'mimi', email: 'mimi@alien.eda.com', hash: hashSync('Weird', saltRounds)}
      ]);
    });
};
