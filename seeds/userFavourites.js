
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userFavourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('userFavourites').insert([
        {user_id: 1, recipe_id: 1}
      ]);
    });
};
