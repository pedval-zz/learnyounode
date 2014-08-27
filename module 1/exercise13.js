var http = require('http');

var server = http.createServer(function(req, res){
	if(req.method === 'GET') {
		var date = null;
		var jsonResult;
		var iso = req.url.split('=')[1];
		if(req.url.indexOf('/api/parsetime') > -1) {			
			
			date = new Date(iso);
			jsonResult = {
				"hour": date.getHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()
			}

			
		} else if(req.url.indexOf('/api/unixtime') > -1){
			date = new Date(iso).getTime();
			jsonResult = {
				"unixtime": date
			}
		}	
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(jsonResult));

	}
}).listen(process.argv[2]); 

