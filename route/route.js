const express = require('express')
const router = express.Router()
const signUpTempcp = require('../models/signupmodels')

router.post('/signup', (req, response) => {
    const signUpUser = new signUpTempcp({
        username: req.body.username,
        password: req.body.password
    })
    signUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})


module.exports = router