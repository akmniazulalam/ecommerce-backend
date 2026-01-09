const express = require('express')
const signupController = require('../../controllers/signupControllers')
const router = express.Router()

router.post('/signup', signupController)


module.exports = router