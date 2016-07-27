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
        console.log('/gulp-tasks');
        // gets all the files names in client/gulp-tasks and trims out the .js ending
        fs.readdir('./client/gulp-tasks', function(err, files) {
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
            console.log('ended');
            console.log(data);
            writeStream.close();
            res.send(data);
        });
    });

//webpack functionality, logic needs work, currently cut and paste from way above
// app.route('/webpack-tasks')
// .get(function(req, res, next) {
// console.log('/webpack-tasks');
// gets all the files names in client/gulp-tasks and trims out the .js ending
// fs.readdir('./client/webpack-tasks', function(err, files) {
// if (err) {
// console.log(err);
// res.send('');
// } else {
// files = files.map(function(element) {
// return element.replace(/\.[^/.]+$/, "");
// });
// console.log('files array');
// console.log(files);
// res.json(files);
// }
// });
// })
// .post(function(req, res, next) {
// console.log(req.body);
// var name = req.body.ingredient;
// var readStream = fs.createReadStream(path.join('./client/gulp-tasks/' + name + '.js'));
// var data = '';
// readStream.setEncoding('utf-8');
// readStream.on('data', function(chunk) {
// data += chunk;
// });

// readStream.on('end', function() {
// console.log('ended');
// console.log(data);
// res.send(data);
// });
// });


//end point at `/compress`
app.get('/download', function(req, res) {

    console.log('download plz')
        //appends all frags together and pipes the writeStream to releaseDir
    var combinedStream = CombinedStream.create();
    fs.readdir('./server/gulpFragments', function(err, files) {

        files.forEach(function(file, idx) {
            combinedStream.append(fs.createReadStream('./server/gulpFragments/' + file));
        })
        combinedStream.pipe(fs.createWriteStream('./server/releaseDir/gulpfile.js'));

        files.forEach(function(file, idx) {
            fs.unlink('./server/gulpFragments/' + file, function(err) {
                if (err) throw err;
                console.log('file deleted!')
            });
        })
    });

    //tar.gz compression
    targz().compress('./server/releaseDir', './public/scaffold.tar.gz', function(err) {
        if (err)
            console.log('Something is wrong ', err.stack);

        console.log('Job done!');
        //sends `download` functional to client, serving the tar`d folder with gulpfile
    });

    // res.download('./server/scaffold.tar.gz');
    res.end();
});


var server = app.listen(3000);
console.log('now listenin`');
