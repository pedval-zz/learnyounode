var fs = require('fs'),
	path = require('path');

var filePath = process.argv[2];
var filter = process.argv[3];

fs.readdir(filePath, function(err, files){
	for(var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === '.'+filter) {
			console.log(files[i]);
		}				
	}	
})