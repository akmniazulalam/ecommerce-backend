const express = require('express')
const router = express.Router()

router.get('/signup', (req, res) => {
    res.send({
        name: "Niaz",
        email: "niazulalam097@gmail.com",
        password: "12345"
    })
})


module.exports = router