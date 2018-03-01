
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pantry').del()
    .then(function () {
      // Inserts seed entries
      return knex('pantry').insert([
        {id: 1, name_of_food: 'apple'}
      ]);
    });
};
