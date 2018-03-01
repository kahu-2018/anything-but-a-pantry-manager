const db = require('./connection')

function getPantry(testDb) {
  return (testDb || db)('pantry')
}

module.exports = {
  getPantry
}