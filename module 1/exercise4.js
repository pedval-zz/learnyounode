var fs = require('fs');

var numberOfLines = 0;

var path = process.argv[2];

fs.readFile(path, function(err, data) {
	numberOfLines += data.toString().split('\n').length - 1;
	console.log(numberOfLines);	

});