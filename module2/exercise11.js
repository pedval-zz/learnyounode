var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, args) {
	var result = spawn(cmd, args);
	return duplexer(result.stdin, result.stdout);
}