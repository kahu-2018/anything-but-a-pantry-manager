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

// function editUser(user_name, db, testDb) {
//   const db = testDb || liveDb
// }

module.exports = {
  getUsers,
  getUserByAuthId  // editUser
}