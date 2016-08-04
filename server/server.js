'use strict';
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const targz = require('tar.gz');
const CombinedStream = require('combined-stream2');

app.use(express.static(path.join(__dirname + './../public')));
app.use(bodyParser.json());

app.route('/gulp-tasks')
    .get(function(req, res, next) {
        // console.log('get','/gulp-tasks');
        // gets all the files names in client/gulp-tasks and trims out the .js ending
        fs.readdir('./client/gulp-tasks', function(err, files) {
            if (err) {
                // console.log(err);
                res.send('');
            } else {
                files = files.map(function(element) {
                    return element.replace(/\.[^/.]+$/, "");
                });
                // console.log('files array');
                // console.log(files);
                res.json(files);
            }
        });
    })
    .post(function(req, res, next) {
        // console.log('post gulptasks', req.body);
        var name = req.body.ingredient;
        var readStream = fs.createReadStream(path.join('./client/gulp-tasks/' + name + '.js'));
        var writeStream = fs.createWriteStream(path.join('./server/gulpFragments/' + name + '.js'));
        var data = '';
        readStream.setEncoding('utf-8');
        readStream.on('data', function(chunk) {
            data += chunk;
            writeStream.write(chunk);
        });
        readStream.on('end', function() {
            // console.log('ended');
            // console.log(data);
            writeStream.close();
            res.send(data);
        });

    });

//webpack functionality
app.route('/webpack-tasks')
    .get(function(req, res, next) {
        // console.log('get', '/webpack-tasks');
        // gets all the files names in client/gulp-tasks and trims out the .js ending
        fs.readdir('./client/webpack-tasks', function(err, files) {
            if (err) {
                // console.log(err);
                res.send('');
            } else {
                files = files.map(function(element) {
                    return element.replace(/\.[^/.]+$/, "");
                });
                // console.log('files array');
                // console.log(files);
                res.json(files);
            }
        });
    })
    .post(function(req, res, next) {
        // console.log('post webpack', req.body);
        var name = req.body.ingredient;
        var readStream = fs.createReadStream(path.join('./client/webpack-tasks/' + name + '.js'));
        var writeStream = fs.createWriteStream(path.join('./server/webpackFrags/' + name + '.js'));
        var data = '';
        readStream.setEncoding('utf-8');
        readStream.on('data', function(chunk) {
            data += chunk;
            writeStream.write(chunk);
        });

        readStream.on('end', function() {
            // console.log('ended');
            // console.log(data);
            writeStream.close();
            res.send(data);
        });
    });


//end point at `/compress`
app.get('/download', function(req, res) {

  // console.log('get download')
    //first check if gulpFragments folder is empty
    fs.readdir('./server/gulpFragments', function(err, files) {
        // console.log(files.length, 'hi mom');
        if (files.length != 0) {

            //appends all gulpFragment files together and pipes the writeStream to releaseDir
            var gulpStream = CombinedStream.create();
            fs.readdir('./server/gulpFragments', function(err, files) {

                files.forEach(function(file, idx) {
                    gulpStream.append(fs.createReadStream('./server/gulpFragments/' + file));
                })
                gulpStream.pipe(fs.createWriteStream('./server/releaseDir/gulpfile.js'));

                files.forEach(function(file, idx) {
                    fs.unlink('./server/gulpFragments/' + file, function(err) {
                        if (err) throw err;
                        console.log('file deleted!')
                    });
                })
            });
        } else {
            //If gulpFragments folder empty, do webpack constructor 
            var webpackStream = CombinedStream.create();
            fs.readdir('./server/webpackFrags', function(err, files) {

                files.forEach(function(file, idx) {
                    webpackStream.append(fs.createReadStream('./server/webpackFrags/' + file));
                })
                webpackStream.pipe(fs.createWriteStream('./server/releaseDir/webpack.config.js'));

                files.forEach(function(file, idx) {
                    fs.unlink('./server/webpackFrags/' + file, function(err) {
                        if (err) throw err;
                        console.log('file deleted!')
                    });
                })
            })
        }
    })


    //tar.gz compression
    targz().compress('./server/releaseDir', './public/scaffold.tar.gz', function(err) {
        if (err) {
            console.log('Something is wrong ', err.stack);
        }

        console.log('Job done!');
    });

    fs.readdir('./server/releaseDir', function(err, files){
      files.forEach(function(file, idx){
        if(file === 'gulpfile.js' || file === 'webpack.config.js'){
          fs.unlink('./server/releaseDir/' + file, function(err){
            if(err) throw err;
          })
        }
      })
    })

    // res.download('./server/scaffold.tar.gz');
    res.end();
});


var server = app.listen(3000);
console.log('now listenin`');
