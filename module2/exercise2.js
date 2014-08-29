var fs = require('fs'),
	http = require('http');


var readStream = fs.createReadStream(process.argv[2]).pipe(process.stdout);