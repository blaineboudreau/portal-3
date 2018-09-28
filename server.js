// index.js

// Dependencies
var express = require('express');
var app = express();
var session = require('express-session');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
