module.exports = {

    readAppend: function(file, appendFile) {
        fs.readFile(appendFile, function(err, data) {
            if (err) throw err;
            console.log('File was read');

            fs.appendFile(file, data, function(err) {
                if (err) throw err;
                console.log('The "data to append" was appended to file!');

            });
        });
    }

    // `test cases`edit this with your file names
    // file = '~/test.js';
    // appendFile = '~/test2.js';
    // ReadAppend(file, appendFile);
}
