const userSchema = require("../model/userSchema")


async function otpController (req, res) {
   const {email, otp} = req.body
   const user = await userSchema.findOne({email})

   if(!user) {
    return res.status(400).json({
        message: "User not found"
    })
   }
   if(user.isVerified){
    return res.json({
        message: "User is verified"
    })
   }

   if(user.otp !== otp || user.expireOtp < Date.now()) {
    return res.status(400).json({
        message: "Invalid Otp"
    })
   }

   user.isVerified = true
   user.otp = undefined
   user.expireOtp = undefined
   await user.save()
   res.status(200).json({
    message: "Email Verification Done"
   })
}

module.exports = otpController