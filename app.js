"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routter = require("./routter.js");
const app = express();
app.use(cors());
const config = require("./config/config.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routter(app);

module.exports = app;
