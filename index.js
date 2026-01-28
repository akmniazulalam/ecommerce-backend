require('dotenv').config()
const express = require("express");
const session = require("express-session")
const dbConnection = require("./database/dbconnection");
const app = express();
const port = 3000;
app.use(express.json())
const route = require('./route')

app.use(session({
  secret: 'ecommerceApi',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(route)

dbConnection()

app.listen(port, () => {
  console.log("Server Running on port 3000");
});
