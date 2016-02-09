'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHeader(200, { 'Content-Type': 'text/plain' });
	res.write('Hello world');
	res.end();
});

server.listen(process.env.PORT || 9000);

//
// Spawn
//
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

exec('blockchain-wallet-service start');
// var service = spawn('blockchain-wallet-service', ['start']);
// var service = spawn('ls');
// service.stdout.on('data', console.log.bind(console));
// service.stderr.on('data', console.log.bind(console));
