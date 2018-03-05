const jwt = require('jsonwebtoken')
const {getAuthByUserName} = require('../db/authDb')
const {getUserByUsername,getUserByAuthId} = require('../db/usersDb')
const verifyJwt = require('express-jwt')
const {compareHash} = require('./hash')

function verifyLogin(req, res) {
  const loginFailureMessage = 'Username or Password is incorrect'
  const serverFailureMessage = 'Server issue: unable to proceed'

  getUserByUsername(req.body.user_name, req.app.get('db'))
    .then(user => {
      if (!user) {
        console.log('verifyLogin: User does not exist')
        return res.status(403).json({
          message: loginFailureMessage
        })
      }
      compareHash(req.body.password, user.hash, (err, match) => {
        if (err) {
          console.log('verifyLogin err: ', err.message)
          res.status(500).json({
            message: serverFailureMessage
          })
        } else if (!match) {
          console.log('verifyLogin: Password is incorrect')
          res.status(400).json({
            message: loginFailureMessage
          })
        } else {
          var token = createToken(user, process.env.JWT_SECRET)
          console.log('verifyLogin: token issued')
          res.status(200).json({
            message: 'Authentication successful',
            token
          })
        }
      })
    })
}


function createToken(user, secret) {
  return jwt.sign({
    user_id: user.id,
    user_name: user.user_name,
    email: user.email
  }, secret, {
    expiresIn: '24h'
  })
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode(req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

module.exports = {
  verifyLogin,
  createToken,
  decode
}