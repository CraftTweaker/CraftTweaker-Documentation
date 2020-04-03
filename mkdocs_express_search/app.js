var express = require('express');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
var searchRouter = require('./routes/search');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());
app.use(helmet());
app.use('/', searchRouter);

module.exports = app;
