var http = require('http');

var url = process.argv[2];

http.get(url, function callback(res) {
  
  res.on('data', function(data){
  	console.log(data.toString());
  })
  .on('end', function(){	
  })
  .on('error', console.error);  
})