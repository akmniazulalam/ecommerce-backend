const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");
const emailVerification = require("../helpers/emailVerification");

async function signupController(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const token = jwt.sign({id: email}, "niaz")
  if(!firstName || !lastName) {
    return res.json({
        message: "Error: First name and last name are required"
    })
  }
  if(!email) {
    return res.json({
        message: "Error: Email is required"
    })
  }
  if(!password) {
    return res.json({
        message: "Error: Password is required"
    })
  }
  if(!emailValidation) {
    return res.json({
        message: "Error: Email format is not correct"
    })
  }

  const existingEmail = await userSchema.find({email})

  console.log(existingEmail.length)

  if(existingEmail.length > 0) {
    return res.json({
      message: "This email already used"
    })
  }

  bcrypt.hash(password, 10, (err, hash) => {
    const user = new userSchema({
    firstName,
    lastName,
    email,
    password: hash,
    token: token
  });
  user.save();
  emailVerification(email)
  })
  res.json({
    message: "Data send",
  })

  
}

module.exports = signupController;
