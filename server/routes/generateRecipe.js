const express = require('express')
const router = express.Router()
const request = require('superagent')

const baseUrl = "http://www.recipepuppy.com/api/"

router.get('/', (req, res) => {
  console.log('server/routes/generateRecipe:\n\tquery-i: ', req.query.i, '\n\tquery-q: ', req.query.q)
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
