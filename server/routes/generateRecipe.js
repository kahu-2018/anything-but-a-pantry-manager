const express = require('express')
const router = express.Router()
const request = require('superagent')

const baseUrl = "http://www.recipepuppy.com/api/"

router.get('/', (req, res) => {
  console.log('test2')
  request
  .get(baseUrl)
  .query({
    i: req.query.i,
    q: req.query.q,
    onlyImages: 1
  })
    .then(extres => {
    res.json(JSON.parse(extres.text))
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
