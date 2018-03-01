
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userRestrictions').del()
    .then(function () {
      // Inserts seed entries
      return knex('userRestrictions').insert([
        {user_id: 1, restriction_id: 1}
      ]);
    });
};
