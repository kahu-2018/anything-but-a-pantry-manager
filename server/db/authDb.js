const db = require('./connection')

function getAuth(testDb) {
  return (testDb || db)('auth')
}

module.exports = {
  getAuth
}