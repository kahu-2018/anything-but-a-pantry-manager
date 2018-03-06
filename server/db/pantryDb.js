var hash = require('../auth/hash')
const liveDb = require('./connection')

function getPantry(testDb) {
  const db = testDb || liveDb
  return db('pantry')
  .select()
}

module.exports = {
  getPantry
}
