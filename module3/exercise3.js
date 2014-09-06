var buffer = [];
process.stdin.on('data', function(data) {
	var buffer = new Buffer(data, 'hex');
	for(i in buffer) {
		if(buffer[i] === 0x2E) {
			buffer[i] = 0x21;
		}
	}
	console.log(buffer);
});
