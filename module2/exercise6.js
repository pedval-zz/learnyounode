var concat = require('concat-stream')
	through = require('through');

var write = concat(function(data){	
	console.log(reverse(data.toString()));
});

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin
.pipe(write);
