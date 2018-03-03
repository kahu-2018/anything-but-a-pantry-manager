const bcrypt = require('bcrypt')
const saltRound = 13

function generateHash(password, cb) {
  bcrypt.hash(password, saltRound, cb)
}

function compareHash(password, hash, cb) {
  bcrypt.compare(password, hash, cb)
}

module.exports = {
  generateHash,
  compareHash
}