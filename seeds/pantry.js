
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pantry').del()
    .then(function () {
      // Inserts seed entries
      return knex('pantry').insert([
        {id: 1, name_of_food: 'apple'},
        {id: 2, name_of_food: 'tomato'},
        {id: 3, name_of_food: 'bread'},
        {id: 4, name_of_food: 'rice'},
        {id: 5, name_of_food: 'cucumber'},
        {id: 6, name_of_food: 'beans'},
        {id: 7, name_of_food: 'lemon'},
        {id: 8, name_of_food: 'garlic'},
        {id: 9, name_of_food: 'spinach'},
        {id: 10, name_of_food: 'broccoli'},
        {id: 11, name_of_food: 'cauliflower'},
        {id: 12, name_of_food: 'almond milk'},
        {id: 13, name_of_food: 'potato'},
        {id: 14, name_of_food: 'leek'},
      ]);
    });
};
