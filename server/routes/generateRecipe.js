const express = require('express')
const app = express()
var server = require('../server')
const router = express.Router()
const request = require('superagent')

const baseUrl = "http://www.recipepuppy.com/api/"

router.get('/api/recipes', (req, res) => {
  request
  .get(baseUrl + '/recipes')
  .query({
    i: pantryIngredients,
    q: dietaryRestrictions,
    onlyImages: 1
  })
    .then(recipes => {
    res.json({recipes: recipes})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
