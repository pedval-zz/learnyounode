var args = [];

for(var i = 2; i < process.argv.length; i++) {
	args[i-2] = process.argv[i];
}

var buffer = new Buffer(args);
console.log(buffer.toString('hex'));
