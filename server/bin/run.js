console.log('Initializing node app');
var app = require('../app.js');
var log = require('../lib/log');
var config = require('../services/config')

var port = config.port;

app.listen(port, function () {
	console.log(`Application started on port ${port}`);
});