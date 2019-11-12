'use strict';

//Modules
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
//Models
var Album = require('./api/models/albumModel');

global.config = require('./modules/config');
global.db = require('./modules/db');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var routes = require('./api/routes/albumRoutes');
routes(app);

var port = process.env.PORT || config.PORT;
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
