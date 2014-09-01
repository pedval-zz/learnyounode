var http = require('http')
	through = require('through');

var server = http.createServer(function(req, res){
	if(req.method === 'POST') {
		req.pipe(through(function(data){
			this.queue(data.toString().toUpperCase());
		})).pipe(res);
	}
}).listen(process.argv[2]);