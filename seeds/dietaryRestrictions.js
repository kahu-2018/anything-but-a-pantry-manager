
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dietaryRestrictions').del()
    .then(function () {
      // Inserts seed entries
      return knex('dietaryRestrictions').insert([
        {id: 1, restricted_food: 'banana'},
        {id: 2, restricted_food: 'gluten free'},
        {id: 3, restricted_food: 'vegan'}
      ]);
    });
};
