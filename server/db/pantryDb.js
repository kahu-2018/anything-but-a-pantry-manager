var hash = require('../auth/hash')
const liveDb = require('./connection')

function getPantry(testDb) {
  const db = testDb || liveDb
  return db('pantry')
  .select()
}

function deleteItem(ingredient, testDb) {
  const db = testDb || liveDb
  return db('pantry')
  .where('name_of_food', ingredient.name_of_food)
  .del()
}

function addItem(name_of_food, testDb) {
  const db = testDb || liveDb
  return db('pantry')
  .insert({name_of_food})
}

module.exports = {
  getPantry,
  deleteItem,
  addItem
}
