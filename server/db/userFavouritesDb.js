const db = require('./connection')
const {getUserByName} = require('./usersDb')

function getUserFavourites(db, testDb) {
  return (testDb || db)('userFavourites').select()
}

function createFavourite(user_name, food, db, testDb) {

}

function deleteFavourite(user_name, food, db, testDb) {

}

module.exports = {
  getUserFavourites,
  createFavourite,
  deleteFavourite
}