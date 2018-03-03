
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Kubo', last_name: 'Mepham', image: 'insert cute photo link here', dietary_restrictions: 'bananas, vegan, gluten-free', auth_id: 1, user_name: 'kubo'}
      ]);
    });
};
