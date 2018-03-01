const db = require('./connection')


function getUsers(db, testDb) {
  return (testDb || db)('users').select()
}

function getUserByName(user_name, db, testDb) {
  user_name = user_name == undefined? '' : user_name
  return db('users')
  .where('user_name', user_name)
  .first()
}

function editUser(user_name, db, testDb) {

}

module.exports = {
  getUsers,
  getUserByName,
  editUser
}