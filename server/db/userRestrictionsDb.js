const db = require('./connection')

function getUserRestrictions(testDb) {
  return (testDb || db)('userRestrictions')
}

module.exports = {
  getUserRestrictions
}