const express = require('express')
const app = express()
const router = express.Router()
const db = require('../db/usersDb')
const request = require('superagent')
// const { decode } = require('../auth/token')


router.get('/', (req, res) => {
  db.getUsers(req.app.get('db'))
  .then(users => {
    res.json({users: users})
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

router.get('/restrictions', (req, res) => {
  db.getRestrictions(userId)
  .then(dietaryRestrictions = > {
    res.json({dietaryRestrictions: dietaryRestrictions})
  })
  .catch(err => {
    console.log('error', err)
  })

})
// waiting on auth to test this uncomment path to decode when ready
// router.get('/profile', decode, (req, res) => {
//   db.getUserByAuthId(req.user.auth_id)
//   .then(user => {
//     res.json({user: user})
//   })
//   .catch(err => {
//     res.status(500).send('Database Error: ', err.message)
//   })
// })

module.exports = router
