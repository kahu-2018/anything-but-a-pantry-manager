const express = require('express')
const router = express.Router()

const db = require('../db/pantryDb')

router.get('/', (req, res) => {
  db.getPantry()
  .then(pantry => {
    res.json(pantry)
  })
  .catch(err => {
    res.status(500).send('Database Error: ', err.message)
  })
})

router.delete('/', (req, res) => {
  db.deleteItem(req.body)
  .then(() => res.sendStatus(202))
  .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.put('/', (req, res) => {
  db.addItem(req.body)
  .then(() => res.sendStatus(202))
  .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
