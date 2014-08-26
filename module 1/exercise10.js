var net = require('net'),
	strftime = require('strftime');

var server = net.createServer(function(socket) {
	socket.end(printCurrentDate());	
});

server.listen(process.argv[2]);


function printCurrentDate() {
	//format "YYYY-MM-DD hh:mm"
	return (strftime('%Y-%m-%d %H:%M', new Date()));
}