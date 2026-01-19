const express = require('express')
const signupController = require('../../controllers/signupControllers')
const otpController = require('../../controllers/otpController')
const router = express.Router()

router.post('/signup', signupController)
router.post('/otpverify', otpController)


module.exports = router