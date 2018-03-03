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

function getUser(userId, testDb) {
  const db = testDb || liveDb
  return db('users')
  .where('id', userId)
  .select()
}

// function editUser(user_name, db, testDb) {
//   const db = testDb || liveDb
// }
function getUserByUsername (username, testDb) {
  if (!username) return null

  const db = testDb || liveDb
  return db('auth')
    .where('user_name', username)
    .join('users', 'users.auth_id', 'auth.id')
    .select('auth.id as auth_id', '*')
    .then(users => {
      return users[0]
    })
}

function getUserByUserId (id, testDb) {
  if (!id) return null
  const db = testDb || liveDb
  return db('users')
    .where('id', id)
    .select()
    .then(users => {
      return users[0]
    })
}


module.exports = {
  getUsers,
  getUserByAuthId,
  getUser,
  getUserByUsername,
  getUserByUserId
}
