var tar = require('tar'),
	crypto = require('crypto'),	
	zlib = require('zlib'),
	through = require('through');

var stream = crypto.createDecipher(process.argv[2], process.argv[3]);

var parser = tar.Parse();

parser.on('entry', function(entry){	
	if(entry.type !== 'File') {
		return;
	}		
	var hash = crypto.createHash('md5', { encoding: 'hex' });	
	entry.pipe(hash).pipe(through(null, end)).pipe(process.stdout);

	function end() {this.queue(' '+entry.path+'\n');}
})



process.stdin.pipe(stream).pipe(zlib.createGunzip()).pipe(parser);