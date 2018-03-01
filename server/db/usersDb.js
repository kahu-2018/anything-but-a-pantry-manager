const liveDb = require('./connection')


function getUsers(testDb) {
  const db = testDb || liveDb
  return db('users')
  .select()
}

function getUserByName(first_name, testDb) {
  const db = testDb || liveDb
  user_name = user_name == undefined? '' : user_name
  return db('users')
  .where('user_name', user_name)
  .first()
}

// function editUser(user_name, db, testDb) {
//   const db = testDb || liveDb
// }

module.exports = {
  getUsers,
  getUserByName
  // editUser
}