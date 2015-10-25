'use strict';
 
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
 
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_6wk95rl6:tgn7bcbbceedvdq6f1hmhcko70@ds045454.mongolab.com:45454/heroku_6wk95rl6');
app.use(express.static(__dirname + '/build'));
 
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
 
require('./routes/admin-routes')(app);
 
var server = http.createServer(app);
 
var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});