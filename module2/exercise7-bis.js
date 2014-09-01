var http = require('http')
	through = require('through');

var tr = through(write);

function write(buf) {
	this.queue(buf.toString().toUpperCase());
}

var server = http.createServer(function(req, res){
	if(req.method === 'POST') {
		req.pipe(tr).pipe(res);
	}
}).listen(process.argv[2]);