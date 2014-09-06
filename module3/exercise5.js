var bufferList = [];
var index = 0;

process.stdin.on('data', function(data){
	var buffer = new Buffer(data);
	bufferList[index] = buffer;	
	index = index + 1;
}).on('end', function(){
	var bufferOut = Buffer.concat(bufferList);
	console.log(bufferOut);		
})





