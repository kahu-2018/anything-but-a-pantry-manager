var router = require('express').Router()

var {userExists, createUser} = require('../db/usersDb')
var token = require('../auth/token')

router.post('/register', register)

function register (req, res) {
    if (!req || !req.body ) {
        return res.status(400).send({message: "Invalid data"})
    }

    const { first_name, last_name, user_name, email, password, confirm_password } = req.body

    if (!first_name || !last_name || !user_name || !email || !password || !confirm_password) {
        return res.status(400).send({message: "Incomplete fields"})
    }

    if ( !user_name.match(/^\w+$/)) {
        return res.status(400).send({message: "Use only alphanumeric in username"})
    }

    if (password.length < 8) {
        return res.status(400).send({message: "Password must be at least 8 characters"})
    }

    if (isCommonPassword(password)) {
        return res.status(400).send({message: "Password is too common"})
    }

    if (password !== confirm_password) {
        return res.status(400).send({message: "Passwords do not match"})
    }

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

            createUser(first_name, last_name, user_name, email, password)
                .then((arr) => {
                    res.status(200).json({message: 'Account successfully created'})
                })
                .catch(err => {
                    console.log('api/auth/register: server error: ', err.message)
                    res.status(500).send({message: "Server Error"})
                })
        })
        .catch(err => {
            console.log('api/auth/register: server error: ', err.message)
            res.status(500).send({message: "Server Error"})
        })

}

function isCommonPassword(password) {
    switch (password) {
        case '123456789':
        case '12345678':
        case '1234567890':
        case 'password':
        case '987654321':
        case 'qwertyuiop':
        case 'qwertyuiop':
        case '77777777':
        case '1q2w3e4r':
        case '3rjs1la7qe':
        case '1q2w3e4r5t':
        case 'letmein':
        case 'football':
        case 'iloveyou':
        case 'starwars':
        case 'passw0rd':
        case 'password1':
        case 'freedom':
        case 'whatever':
        case 'trustno1':
        case 'sunshine':
        case 'princess':
        case 'superman':
        case 'baseball':
        case 'adobe123':
        case 'Football':
        case 'zaq1zaq1':
            return true;
        default:
            return false;
    }
}


router.post('/login', token.verifyLogin)

module.exports = router
