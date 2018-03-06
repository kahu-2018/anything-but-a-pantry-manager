const express = require('express')
const router = express.Router()

const db = require('../db/usersDb')
const { decode } = require('../auth/token')


router.get('/profile/:id', decode, (req, res) => {
  db.getUserByUserId(req.params.id)
    .then(user => {
      res.status(200).json({user: user})
    })
})


router.put('/profile/:id', decode, (req, res) => {
  if (req.params.id) {
    db.updateUserByUserId(req.params.id, req.body)
      .then(()=>{
        res.status(200).send('Profile id ', req.params.id, ' is updated')
      })
  } else {
    res.status(400).send('Invalid data')
  }

  
})

module.exports = router
