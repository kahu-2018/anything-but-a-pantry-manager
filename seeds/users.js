
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Kubo', last_name: 'Mepham', image: 'images/kubz.jpg', dietary_restrictions: 'bananas, vegan, gluten free', auth_id: 1, favourite_food: 'Apples'},
        {id: 2, first_name: 'Mimi', last_name: 'Dada', image: 'images/Kubo.jpg', dietary_restrictions: 'gluten free', auth_id: 2, favourite_food: 'Plums'}
      ]);
    });
};
