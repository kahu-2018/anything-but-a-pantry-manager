const express = require('express')
const router = express.Router()

const db = require('../db/usersDb')
const { decode } = require('../auth/token')


router.get('/:id', decode, (req, res) => {
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


router.get('/profile', decode, (req, res) => {
  db.getUserByAuthId(req.user.auth_id)
  .then(user => {
    res.json({user: user})
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

router.put('/profile', (req, res) => {
  console.log('req.params', req.params)
})

module.exports = router
