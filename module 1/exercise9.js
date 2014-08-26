var http = require('http'),
	bl = require('bl');

var urls = [];
for(var i = 2; i < process.argv.length; i++) {
	urls[i-2] = process.argv[i];
}

var sortedResult = [];
var iteration = 0;

for(var i = 0; i < urls.length; i++) {	
	getList(i, urls[i]);	
}

function getList(i, url) {
	http.get(url, function(res) {
		var fullData = "";
		res.on('data', function(data){
			fullData += data.toString(); 
		})
		res.on('end', function(){			
			sortedResult[i] = fullData; 
			iteration++;
			if(iteration === urls.length) {
				print();
			}	
		})
	});
}

function print() {
	for(i in sortedResult) {
		console.log(sortedResult[i]);
	}
}

