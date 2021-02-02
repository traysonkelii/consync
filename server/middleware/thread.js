const {getThreadsByChannelId, getThreadById, updateThread, createThread} = require("../services/databaseService");

module.exports = {};

module.exports.getThreadsByChannelId = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.id;
		let threads = await getThreadsByChannelId(channelId);
		if(req.result) {
			req.result.threads = threads;
		} else {
			req.result = {threads}
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getThreadById = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let thread = await getThreadById(threadId);
		req.result = thread;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.updateThread = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let threadUpdates = req.body;
		let thread = await updateThread(threadId, threadUpdates);
		req.result = thread;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.archiveThread = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let threadUpdates = {status: "archived"};
		let thread = await updateThread(threadId, threadUpdates);
		req.result = thread;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}


module.exports.createThread = async (req, res, next) => {
	let error;
	try {
		let threadObj = req.body;
		let thread = await createThread(threadObj);
		req.result = thread;
	} catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}