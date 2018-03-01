const db = require('./connection')
const {getUserByName} = require('./usersDb')

function getUserRestrictions (db, testDb) {
  return (testDb || db)('userRestrictions').select()
}

function createRestriction(user_name, food, db, testDb) {

}

function deleteRestriction(user_name, food, db, testDb) {

}

module.exports = {
  getUserRestrictions,
  createRestriction,
  deleteRestriction
}