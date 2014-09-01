var duplexer = require('duplexer'),
	through = require('through');

module.exports = function(counter) {
	var countryCount = {};

	var tr = through(write, end);

	function write(buf) {
		countryCount[buf.country] = (countryCount[buf.country] || 0) + 1;
	}

	function end(){
		counter.setCounts(countryCount);
	}	
	
	return duplexer(tr, counter);
}
