const nodemailer = require("nodemailer");

async function emailVerification(email){
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "niazulalam097@gmail.com",
    pass: "bktukefpdjtjazuv",
  },
});


  const info = await transporter.sendMail({
    from: '"Signup" <niazulalam097@gmail.com>',
    to: email,
    subject: "Signup Successful",
    text: "Your account has been created successfully.", // Plain-text version of the message
    html: "<b>Your account has been created successfully.</b>", // HTML version of the message
  });
}

module.exports = emailVerification