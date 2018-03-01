const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(function () {
      // Inserts seed entries
      return knex('auth').insert([
        {id: 1, user_name: 'kubo', email: 'kubo@eda.com', hash: hashSync('Cute', saltRounds), salt: ''}
      ]);
    });
};
