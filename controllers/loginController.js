const emailValidation = require("../helpers/emailValidation")
const userSchema = require("../model/userSchema")
const bcrypt = require("bcrypt")


async function loginController (req, res) {
    const {email, password} = req.body

    const existingEmailUser = await userSchema.findOne({email})

    if(!email){
        return res.json({
            message: "Email is required"
        })
    }
    if(!emailValidation(email)){
        return res.json({
            message: "Email format is not correct"
        })
    }
    if(!existingEmailUser){
        return res.json({
            message: "Email not found"
        })
    }
    if(!password){
        return res.json({
            message: "Password is required"
        })
    }
    
    const isMatch = await bcrypt.compare(password, existingEmailUser.password)

    if (!isMatch) {
        return res.json({ message: "Invalid Password" })
    }
    
   res.json({
    message: "Login Successful"
   })
}

module.exports = loginController