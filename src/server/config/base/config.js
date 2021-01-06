let config = {};
config.defaultPort = '8001';
config.port = process.env.PORT || config.defaultPort;

config.log = {
	dir: 'log',
	app: {
		filename: 'app.log'
	},
	error: {
		filename: 'error.log'
	},
	request: {
		filename: 'request.log'
	}
};

module.exports = config;
