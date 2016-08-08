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
app.use(bodyParser.urlencoded({
    extended: true
}));

app.route('/gulp-tasks')
    .get(function(req, res, next) {
        // gets all the files names in client/gulp-tasks and trims out the .js ending
        fs.readdir('./client/gulp-tasks', function(err, files) {
            if (err) {
                console.log(err);
                res.send('');
            } else {
                files = files.map(function(element) {
                    return element.replace(/\.[^/.]+$/, "");
                });
                res.json(files);
            }
        });
    })
    .post(function(req, res, next) {
        var name = req.body.ingredient;
        var readStream = fs.createReadStream(path.join('./client/gulp-tasks/' + name + '.js'));
        var data = '';
        readStream.setEncoding('utf-8');
        readStream.on('data', function(chunk) {
            data += chunk;
        });
        readStream.on('end', function() {
            res.send(data);
        });

    });

//webpack functionality
app.route('/webpack-tasks')
    .get(function(req, res, next) {
        // gets all the files names in client/gulp-tasks and trims out the .js ending
        fs.readdir('./client/webpack-tasks', function(err, files) {
            if (err) {
                console.log(err);
                res.send('');
            } else {
                files = files.map(function(element) {
                    return element.replace(/\.[^/.]+$/, "");
                });
                res.json(files);
            }
        });
    })
    .post(function(req, res, next) {
        var name = req.body.ingredient;
        var readStream = fs.createReadStream(path.join('./client/webpack-tasks/' + name + '.js'));
        var data = '';
        readStream.setEncoding('utf-8');
        readStream.on('data', function(chunk) {
            data += chunk;
        });
        readStream.on('end', function() {
            res.send(data);
        });
    });


//end point at `/download`
app.post('/download', function(req, res) {

    fs.writeFile('./server/releaseDir/' + req.body.type, req.body.finalRecipe, function(err) {
        if (err) console.log(err);
    })

    //tar.gz compression
    targz().compress('./server/releaseDir', './public/scaffold.tar.gz', function(err) {
        if (err) {
            console.log('Something is wrong ', err.stack);
        }

        console.log('Job done!');
        fs.readdir('./server/releaseDir', function(err, files) {
            files.forEach(function(file, idx) {
                if (file === 'gulpfile.js' || file === 'webpack.config.js') {
                    fs.unlink('./server/releaseDir/' + file, function(err) {
                        if (err) throw err;
                    })
                }
            })
        })
    });

    res.end();
});


var server = app.listen(3000);
console.log('now listenin`');
