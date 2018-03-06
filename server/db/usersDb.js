var hash = require('../auth/hash')
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

// Check if username or email has been used
// to create an account
function userExists (username, email, testDb) {
  const db = testDb || liveDb

  username = (username == undefined)? '' : username
  email = (email == undefined)? '' : email

  return db('auth')
    .where('user_name', username)
    .orWhere('email', email)
    .select('user_name', 'email')
}

function createUser (first_name, last_name, user_name, email, password, testDb) {
  const db = testDb || liveDb

  return createAuth(user_name, email, password, testDb)
    .then((auth_id) => {
      const image = 'insert cute photo link here'
      const dietary_restrictions = ''
      return db('users')
        .insert({first_name, last_name, image, dietary_restrictions, auth_id})
        .catch(err => {
          console.log('usersDb: createUser error: ', err.message)
          reject(err)
        })
    })
}

function createAuth(user_name, email, password, testDb) {
  const db = testDb || liveDb

  return new Promise ((resolve, reject) => {
    hash.generateHash(password, (err, hash) => {
      if (err) {
        reject(err)
      }
      db('auth')
        .insert({user_name, email, hash})
        .then(id_arr => {
          resolve(id_arr[0])
        })
        .catch(err => {
          console.log('usersDb:createAuth error: ', err.message)
          reject(err)
        })
    })
  })
}


function updateUserByUserId (id, data, testDb) {
  if (!id) return null
  const db = testDb || liveDb

  return db('users').where('id', id)
    .update(
      data
    )
    .catch(err => {
      console.log('userDb: updateUserByUserId error: ', err.message)
      reject(err)
    })

}


module.exports = {
  getUsers,
  getUserByAuthId,
  getUser,
  getUserByUsername,
  getUserByUserId,
  userExists,
  createUser,
  updateUserByUserId
}
