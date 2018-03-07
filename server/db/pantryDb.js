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

function addItem(item, testDb) {
  const db = testDb || liveDb
  return db('pantry')
  .insert(item)
}

module.exports = {
  getPantry,
  deleteItem,
  addItem
}
