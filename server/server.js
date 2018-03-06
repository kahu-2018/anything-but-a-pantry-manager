const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const generateRecipe = require('./routes/generateRecipe')
const users = require('./routes/users')
const auth = require('./routes/auth')
const pantry = require('./routes/pantry')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/recipes', generateRecipe)
server.use('/api/users', users)
server.use('/api/auth', auth)
server.use('/api/pantry', pantry)

module.exports = server
