const db = require('./connection')

function getUserFavourites(testDb) {
  return (testDb || db)('userFavourites')
}

module.exports = {
  getUserFavourites
}