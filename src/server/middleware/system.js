const log = require('../lib/log');
const config = require('../services/config.js');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');
const fs = require('fs');

const logDirectory = path.normalize(
	path.join(
		__dirname,
		'..',
		config.log.dir
	)
);
fs.existsSync(logDirectory) || /* istanbul ignore next: no need to test fs here */ fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream(config.log.request.filename, {
	interval: '7d',
	maxFiles: 1,
	path: logDirectory
});

morgan.token('additional-logs', (req) => {
	return req.additionalLogs;
});

function jsonFormat(tokens, req, res) {
	return JSON.stringify({
		'remote-address': tokens['remote-addr'](req, res),
		'time': tokens['date'](req, res, 'iso'),
		'method': tokens['method'](req, res),
		'url': tokens['url'](req, res),
		'http-version': tokens['http-version'](req, res),
		'status-code': tokens['status'](req, res),
		'content-length': tokens['res'](req, res, 'content-length'),
		'referrer': tokens['referrer'](req, res),
		'user-agent': tokens['user-agent'](req, res),
		'additional-logs': tokens['additional-logs'](req, res)
	});
}

module.exports.requestLogging = morgan(jsonFormat, { stream: accessLogStream });

module.exports.healthCheck = (req, res) => {
	res.send({ status: 'ok' });
};

module.exports.errorHandler = (err, req, res, next) => {
	log.error({
		err,
		method: req.method,
		url: req.originalUrl
	});
	res.status(err.status || 500);
	res.json({ error: err.message });
	next();
};


module.exports.notFoundHandler = (req, res, next) => {
	let err = new Error('Not Found');
	if (req.headers.referer) {
		err.referer = req.headers.referer;
	}
	err.status = 404;
	next(err);
};
