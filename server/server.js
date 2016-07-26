'use strict';
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const append = require('./readAppend'); //appends a file to another: @params -> (file, appendFile) 

app.use(express.static('./../public'));

var server = app.listen(3000);
console.log('now listenin`');


