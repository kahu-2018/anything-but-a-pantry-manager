const express = require('express')
const router = express.Router()

const db = require('../db/usersDb')


router.get('/:id', (req, res) => {
  console.log('server/routes/users/ get: params = ', req.params.id)
  db.getUserByUserId(req.params.id)
    .then(user => {
      res.json({user: user})
    })
  // db.getUser(req.body)
  // .then(response => {
  //   res.json({user: response})
  // })
  // .catch(err => {
  //   console.log('error', err)
  // })
  // console.log('getDR 3')
})

// router.get('/', (req, res) => {
//   db.getUsers(req.app.get('db'))
//   .then(users => {
//     res.json({users: users})
//   })
//   .catch(err => {
//     res.status(500).send('Database Error: ', err.message)
//   })
// })

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

router.get('/profile', (req, res) => {
  console.log('server/routes/users/profile/ get: user.auth.id = ', req.user.auth_id)
  db.getUserByAuthId(req.user.auth_id)
  .then(user => {
    res.json({user: user})
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

module.exports = router
