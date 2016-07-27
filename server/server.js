'use strict';
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const append = require('./readAppend'); //appends a file to another: @params -> (file, appendFile)
const path = require('path');

app.use(express.static(path.join(__dirname + './../public')));

var server = app.listen(3000);
console.log('now listenin`');

app.get('/gulp-tasks', function(req, res) {
  console.log('gulp-tasks');
  res.json({
    test: 'test1',
    test2: 'test2'
  });
});

app.get('/gulp-tasks-list', function(req, res) {
  console.log('/gulp-tasks-list');

  fs.readdir('./gulp-tasks', function(err, files) {
    if (err) {
      console.log(err);
      res.send('');
    } else {
      console.log('files array');
      console.log(files);
      res.json(files);
    }
  });
});
