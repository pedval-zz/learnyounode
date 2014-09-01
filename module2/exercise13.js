var combine = require('stream-combiner'),
	split = require('split'),
	through = require('through'),
	zlib = require('zlib');




module.exports = function() {	

	var tr = through(write, end);
	var outputLine;	

	function write(input) {
		if (input.length === 0) return;
            var row = JSON.parse(input);

            if (row.type === 'genre') {
                if (outputLine) {
                    this.queue(JSON.stringify(outputLine) + '\n');
                }
                outputLine = { name: row.name, books: [] };
            }
            else if (row.type === 'book') {
                outputLine.books.push(row.name);
            }
	}

	function end() {
		if (outputLine) {
                this.queue(JSON.stringify(outputLine) + '\n');
            }
            this.queue(null);
	}
	return combine(split(),	tr,	zlib.createGzip());

}
	