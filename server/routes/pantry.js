const express = require('express')
const router = express.Router()

const db = require('../db/pantryDb')

router.get('/', (req, res) => {
  console.log('route')
  db.getPantry()
  .then(ingredient => {
    console.log('response', ingredient)
    res.json({pantry: ingredient})
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

module.exports = router
