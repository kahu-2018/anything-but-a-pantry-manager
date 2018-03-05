var router = require('express').Router()

var {userExists, createUser} = require('../db/usersDb')
var token = require('../auth/token')

router.post('/register', register)

function register (req, res) {
    console.log(req.body)
    res.status(200).json({
        message: 'Account successfully created'
    })
//   const {user_name, first_name, last_name, password, hourly_wage} = req.body
//   userExists(user_name, req.app.get('db'))
//     .then(exists => {
//       if (exists) return res.status(400).send({message: "User Name Taken"})
//       createUser(user_name, first_name, last_name, password, hourly_wage, req.app.get('db'))
//         .then(() => next())
//         .catch(err => res.status(500).send({message: "Server Error"}))
//     })
//     .catch(err => res.status(500).send({message: "Server Error"}))
}


router.post('/login', token.verifyLogin)

module.exports = router