const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const generateRecipe = require('./routes/generateRecipe')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/recipes', generateRecipe)

module.exports = server
