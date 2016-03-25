var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var Firebase = require("firebase");

// controllers

// Express
var app = express();

// Express Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("client"));

// Endpoints

//Connections
var port = 8500;
app.listen(port, function() {
	console.log("listening on port: ", port);
});