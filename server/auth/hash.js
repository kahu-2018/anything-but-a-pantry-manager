const bcrypt = require('bcrypt')
const crypto = require('crypto')

function generate(password, cb) {
  bcrypt.hash(password, 12, cb)
}

function compare (password, hash, cb) {
  bcrypt.compare(password, hash, cb)
}

function getRandomSalt() {
  return crypto.randomBytes(20).toString('Hex') 
}

module.exports = {
  generate,
  compare,
  getRandomSalt
}