'use strict';
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const append = require('./readAppend'); //appends a file to another: @params -> (file, appendFile)
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname + './../public')));
app.use(bodyParser.json());



app.route('/gulp-tasks')
  .get(function(req, res, next) {
  console.log('/gulp-tasks');

    fs.readdir('./gulp-tasks', function(err, files) {
      if (err) {
        console.log(err);
        res.send('');
      } else {
        files = files.map(function(element) {
          return element.replace(/\.[^/.]+$/, "");
        });
        console.log('files array');
        console.log(files);
        res.json(files);
      }
    });
  })
  .post(function(req, res, next) {
    console.log(req.body);


  });

  var server = app.listen(3000);
  console.log('now listenin`');
