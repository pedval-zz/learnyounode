var trumpet = require('trumpet'),
	through = require('through');

var tr = through(write);
var trum = trumpet();

process.stdin.pipe(trum).pipe(process.stdout);

var stream = trum.select('.loud').createStream();
stream.pipe(tr).pipe(stream);

function write(buf) {			
		this.queue(buf.toString().toUpperCase());
}