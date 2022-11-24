
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();
const reviewRoute = require("./routes/review");

const config = require('./config');

var app = express();

const whitelist = ['https://athenapi.herokuapp.com/api/reviews']

app.use(cors({origin:whitelist}));
// settings
//const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", reviewRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
app.get('/', function(req, res, next) {
  // Handle the get for this route
});
app.post('/', function(req, res, next) {
  // Handle the post for this route
})