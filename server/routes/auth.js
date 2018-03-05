var router = require('express').Router()

var {userExists, createUser} = require('../db/usersDb')
var token = require('../auth/token')

router.post('/register', register)

function register (req, res) {
    console.log('server/routes/auth: req.body: ', req.body)

    const { first_name, last_name, user_name, email, password, confirm_password } = req.body

    userExists(user_name, email)
        .then(users => {
            if (users.length > 0) {
                for (let user of users) {
                    if (user.user_name == user_name) {
                        return res.status(400).send({message: "Username was taken"})
                    }
                    if (user.email == email) {
                        return res.status(400).send({message: "Email has been used in another account"})
                    }
                }
            }

            res.status(200).json({
                message: 'Account successfully created'
            })
        })
        .catch(err => res.status(500).send({message: "Server Error"}))

}


    //usernameExists
//   const {user_name, first_name, last_name, password, hourly_wage} = req.body
//   userExists(user_name, req.app.get('db'))
//     .then(exists => {
//       if (exists) return res.status(400).send({message: "User Name Taken"})
//       createUser(user_name, first_name, last_name, password, hourly_wage, req.app.get('db'))
//         .then(() => next())
//         .catch(err => res.status(500).send({message: "Server Error"}))
//     })
//     .catch(err => res.status(500).send({message: "Server Error"}))


router.post('/login', token.verifyLogin)

module.exports = router