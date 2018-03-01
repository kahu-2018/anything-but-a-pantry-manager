const bcrypt = require('bcrypt')

function generate(password, cb) {
  bcrypt.hash(password, 12, cb)
}

function compare (password, hash, cb) {
  bcrypt.compare(password, hash, cb)
}

module.exports = {
  generate,
  compare
}