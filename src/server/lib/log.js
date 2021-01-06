const bunyan = require('bunyan');
const fs = require('fs');
const path = require('path');
const config = require('../services/config');

const logDirectory = path.normalize(
	path.join(
		__dirname, '..', '..', '..', config.log.dir
	)
);

fs.existsSync(logDirectory) || /* istanbul ignore next: no need to test fs here */ fs.mkdirSync(logDirectory);

let streams = [
	{
		type: 'rotating-file',
		path: path.join(logDirectory, config.log.app.filename),
		period: '7d',
		count: 1,
		level: 'info'
	},
	{
		type: 'rotating-file',
		path: path.join(logDirectory, config.log.error.filename),
		period: '7d',
		count: 1,
		level: 'error'
	}
];
/* istanbul ignore if */
if (process.env.CONSYNCENV === 'dev') {
	streams.push(
		{
			stream: process.stdout,
			level: 'debug'
		}
	);
}

const log = bunyan.createLogger({
	name: 'AppLog',
	level: 'info',
	streams,
	serializers: bunyan.stdSerializers,
	src: false,
});

module.exports = log;
