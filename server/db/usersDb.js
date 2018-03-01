const db = require('./connection')

function getUsers(testDb) {
  return (testDb || db)('users')
}

module.exports = {
  getUsers
}