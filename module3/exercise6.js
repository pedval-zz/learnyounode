var buffer =[];
process.stdin.on('data', function(data){
	buffer = new Uint8Array(data);
}).on('end', function() {
	console.log(JSON.stringify(buffer));
});