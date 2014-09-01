var split = require('split'),
	through = require('through');

var tr = through(write);

var numberLine = 1;

function write(buf) {	
	if(numberLine % 2 == 0) {
		console.log(buf.toString().toLowerCase());		
	} else {
		console.log(buf.toString().toUpperCase());		
	}
}

process.stdin.pipe(split())
.on('data', function(line) {
	numberLine++;
})
.pipe(tr);