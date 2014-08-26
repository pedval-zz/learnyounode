var ex6 = require('./module6.js');

var path = process.argv[2];
var extension = process.argv[3];

ex6(path, extension, function(err, result) {
	for(var i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
})