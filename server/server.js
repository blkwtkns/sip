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


//store of gulp fragments
// var gulpBase = './server/gulpFragments/gulpBase.js';
// var gulpSass = './server/gulpFragments/gulpSass.js';

//end point at `/compress`
  app.route('/compress')
    .get(function(req, res, next) {

    //appends all frags together and pipes the writeStream to releaseDir
    var combinedStream = CombinedStream.create();
    fs.readdir(path.join('./server/gulpFragments'), function(err, files) {

        files.forEach(function(file, idx) {
            combinedStream.append(fs.createReadStream(file));
        })
        combinedStream.pipe(fs.createWriteStream(path.join('./server/releaseDir/gulpfile.js')));
    });
    //Concating `gulp fragments` as appended read streams, then writing them to one `gulpfile`
    // var combinedStream = CombinedStream.create();
    // combinedStream.append(fs.createReadStream(gulpBase));
    // combinedStream.append(fs.createReadStream(gulpSass));
    // combinedStream.pipe(fs.createWriteStream('./server/releaseDir/gulpfile.js'));

    //tar.gz compression
    targz().compress('./server/releaseDir', './server/scaffold.tar.gz', function(err) {
        if (err)
            console.log('Something is wrong ', err.stack);

        console.log('Job done!');
        //sends `download` functional to client, serving the tar`d folder with gulpfile
        res.download('./server/scaffold.tar.gz');
    });

    // var newGulp = fs.createReadStream('./server/gulpFragments/gulpBase.js').pipe(fs.createWriteStream('./server/releaseDir/gulpfile.js')).pipe(
    // var newGulp = fs.writeFile('./server/releaseDir/gulpfile.js');
    // append.readAppend(newGulp, mainFile);
    // append.readAppend(newGulp, appendFile)).on('close',function() {
    // console.log('finished downloading');
    // });;

    // var archive = Archiver('zip');
    // archive.on('error', function(err) {
    // res.status(500).send({error: err.message});
    // });

    // on stream closed we can end the request
    // res.on('close', function() {
    // console.log('Archive wrote %d bytes', archive.pointer());
    // return res.status(200).send('OK').end();
    // });

    // set the archive name
    // res.attachment('scaffold.zip');

    // this is the streaming magic
    // archive.pipe(res);
    // archive.append(fs.createReadStream('mydir/file.txt'), {name:'file.txt'});

    // you can add a directory using directory function
    // archive.directory('./releaseDir', './releaseDir.zip');
    // archive.finalize();
});


var server = app.listen(3000);
console.log('now listenin`');
