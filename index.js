'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHeader(200, { 'Content-Type': 'text/plain' });
	res.write('Hello world');
	res.end();
});

server.listen(process.env.PORT || 9000);
