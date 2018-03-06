const express = require('express')
const router = express.Router()

const db = require('../db/pantryDb')

router.get('/', (req, res) => {
  db.getPantry()
  .then(ingredient => {
    res.json({pantry: ingredient})
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

router.delete('/', (req, res) => {
  console.log('route')
  db.deleteItem(req.body)
  .then(() => res.sendStatus(202))
  .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
