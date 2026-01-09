require('dotenv').config()
const express = require("express");
const dbConnection = require("./database/dbconnection");
const app = express();
const port = 3000;
const route = require('./route')

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(route)

dbConnection()

app.listen(port, () => {
  console.log("Server Running on port 3000");
});
