var fs = require('fs');

var previous = 0;
var bufferFile = fs.readFileSync(process.argv[2]);

for(var i = 0; i < bufferFile.length; i++) {	

	if(bufferFile[i] === 0x0a) {	
				
		console.log(bufferFile.slice(previous, i));
		i++;
		previous = i;
		
	}
	
}
console.log(bufferFile.slice(previous, i));


	




