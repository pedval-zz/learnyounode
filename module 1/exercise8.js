var bl = require('bl'),
	http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
	res.pipe(bl(function(err, data){
		if(err) {
			return console.error(err);
		}
		console.log(data.toString().length)
		console.log(data.toString());
	}));
	res.on('end', function(){});
})
