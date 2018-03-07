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
  .then(item_id => getItemById(item_id[0], db))
}

const getItemById = (item_id, testDb) => {
  return (testDb || db)('pantry')
    .where('id', item_id)
    .select()
}

module.exports = {
  getPantry,
  deleteItem,
  addItem
}
