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

server.use(requireHTTPS)
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/recipes', generateRecipe)
server.use('/api/users', users)
server.use('/api/auth', auth)
server.use('/api/pantry', pantry)


// Source: 
// 1. https://stackoverflow.com/questions/15813677/https-redirection-for-all-routes-node-js-express-security-concerns
// 2. https://stackoverflow.com/questions/7185074/heroku-nodejs-http-to-https-ssl-forced-redirect
function requireHTTPS(req, res, next) {
    if ((process.env.NODE_ENV === 'production') &&
        (req.headers['x-forwarded-proto'] !== 'https')) {
        let secureUrl = 'https://' + req.get('host') + req.url
        res.redirect(secureUrl)
    } else {
        next();
    }
}

module.exports = server
