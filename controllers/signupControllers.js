const express = require("express");
const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");

function signupController(req, res) {
  const { firstName, lastName, email, password } = req.body;
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
  const user = new userSchema({
    firstName,
    lastName,
    email,
    password,
  });
  user.save();
  res.json({
    data: user,
  })
}

module.exports = signupController;
