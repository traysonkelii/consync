
let _ = require('lodash');
let config = require('../config/base/config.js');

/**
 * Setup configuration
 */
switch (process.env.CONSYNCENV) {
	case 'prod': {
		_.merge(config, require('../config/prod/config.js'));
		console.log('Production environment detected');
		break;
	}
	case 'stage': {
		_.merge(config, require('../config/stage/config.js'));
		console.log('Stage environment detected');
		break;
	}
	default: {
		_.merge(config, require('../config/dev/config.js'));
		console.log('Dev environment detected');
		break;
	}
}

module.exports = config;

