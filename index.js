'use strict';

var app = require('express')();
var apiProxy = require('http-proxy').createProxyServer();

app.get('/*', function(req, res) {
	apiProxy.web(req, res, {
		target: 'http://127.0.0.1:3000'
	}, function(error) { console.error(error) });
});

app.listen(process.env.PORT || 9000);


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
