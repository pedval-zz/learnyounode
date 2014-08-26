var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(req, res){	

	var readStream = fs.createReadStream(process.argv[3]);

	readStream.on('open', function () {    
    	readStream.pipe(res);
  	});
})

server.listen(process.argv[2]);