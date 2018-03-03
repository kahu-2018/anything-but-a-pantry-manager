const liveDb = require('./connection')

function getUsers(testDb) {
  const db = testDb || liveDb
  return db('users')
  .select()
}

function getUserByAuthId (id, testDb) {
  const db = testDb || liveDb
  id = id == undefined? '' : id
  return db('users')
  .where('auth_id', id)
  .first()
}

function getRestrictions(testDb, user_name) {
  const db = testDb || liveDb
  return db('users')
  .where('user_name', user_name)
  .select(users.dietary_restrictions)
}
// function editUser(user_name, db, testDb) {
//   const db = testDb || liveDb
// }

module.exports = {
  getUsers,
  getUserByAuthId,
  getRestrictions
}
