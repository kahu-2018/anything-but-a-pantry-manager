const liveDb = require('./connection')

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