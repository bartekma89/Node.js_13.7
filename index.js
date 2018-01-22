var fs = require('fs');
var Color = require('colors');

var writeStream = fs.createWriteStream('./path.txt');
var readStream = fs.createReadStream('./path.txt');

fs.readdir(__dirname, function (err, files) {

    if (err) throw err.message;

    files.forEach(function (file) {
        console.log(file);
    })

    writeStream.write(files.toString());
    writeStream.end();
    writeStream.on('finish', function () {
        console.log('Save data completed'.green);
    })

})

readStream.on('data', function (chunk) {
    console.log(chunk.toString());
    console.log('Data read from file'.blue);
})

readStream.pipe(process.stdout);
readStream.on('end', function() {
    console.log('Ended piping');
})