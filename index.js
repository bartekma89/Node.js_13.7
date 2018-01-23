var fs = require('fs');
var Color = require('colors');

var fileToStoreData = 'path.txt';

var writeContent = function (fileData) {
    fs.readdir(__dirname, function (err, files) {

        if (err) throw err.message;

        files.forEach(function (file) {
            console.log(file);
        })

        var writeStream = fs.createWriteStream(fileData, {
            encoding: 'utf8'
        });
        writeStream.write(files.toString());
        writeStream.end();
        writeStream.on('finish', function () {
            console.log('Save data completed'.green);
            readContent(fileData);
        })

    })
}

var readContent = function (fileData) {
    fs.createReadStream(fileData).on('data', function (chunk) {
        console.log('Data read from file'.blue);
        console.log(chunk.toString());
    })
}

writeContent(fileToStoreData);