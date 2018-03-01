const liveDb = require('./connection')

function getAuthById(id, testDb) {
  const db = testDb || liveDb

  return db('auth').where('id', id).first()

}

module.exports = {
  getAuthById
}