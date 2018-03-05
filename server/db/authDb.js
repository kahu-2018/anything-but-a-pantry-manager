const liveDb = require('./connection')


/*
// Brian's Note: 
// This file need to be removed. Both User and Auth Table should be in
// usersDb.test.js // and usersDb.js. The query should be done using 
// join table if need both data from Users and Auth table
*/


function getAuthById(id, testDb) {
  const db = testDb || liveDb

  return db('auth').where('id', id).first()

}

function getAuthByUserName(username, testDb) {
  const db = testDb || liveDb

  return db('auth').where('user_name', username).first()

}

function getAuthByEmail(email, testDb) {
  const db = testDb || liveDb

  return db('auth').where('email', email).first()

}


module.exports = {
  getAuthById,
  getAuthByUserName,
  getAuthByEmail
}