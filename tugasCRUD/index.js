//filename index.js

//import express
let express = require('express');

//import body parser
let bodyParser = require('body-parser');

//import mongoose db
let mongoose = require('mongoose');

//initialize app
let app = express();

//import routes
let apiRoutes = require('./api-routes');

//configuration
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugasCRUD');

var db = mongoose.connection;

//setup server port
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req, res) => res.send('this is tugas 2 nodeJS for NIOMIC'));

//app apiRoutes
app.use('/api', apiRoutes);

//launch app to listen specify PORT
app.listen(port, function() {
  console.log('running tugasCRUD on port ' + port);
});