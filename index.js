var fs = require('fs');
var Color = require('colors');

fs.readdir(__dirname, function(err, files) {
    if(err) throw err.message;
    
    files.forEach(function(file) {
        console.log(file);
    })
    
    fs.writeFile('./path.txt', files, function(err) {
        if(err) throw err.message;
        
        console.log('Dane zapisane do pliku'.green);
    })
})

fs.readFile('./path.txt', function(err, data){
    if(err) throw err.message;
    
    console.log(data.toString());
    console.log('Dane odczytane z pliku'.blue);
})