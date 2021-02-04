const { getMessagesByThreadId, createMessage, getMessageById, updateMessage } = require("../services/databaseService");

module.exports = {};

module.exports.getMessagesByThreadId = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let messages = await getMessagesByThreadId(threadId);
		if(!req.result) {
			req.result = {messages};
		} else {
			req.result.messages = message;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.createMessage = async (req, res, next) => {
	let error;
	try{
		let messageObj = req.body;
		let message = await createMessage(messageObj);
		req.result = message;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getMessageById = async (req, res, next) => {
	let error;
	try {
		let messageId = req.params.id;
		let message = await getMessageById(messageId);
		req.result = {message};
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateMessageById = async (req, res, next) => {
	let error;
	try{
		let messageId = req.params.id;
		let messageUpdates = req.body;
		let message = await updateMessage(messageId, messageUpdates);
		req.result = message;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.archiveMessage = async (req, res, next) => {
	let error;
	try{
		let messageId = req.params.id;
		let messageUpdates = {status: 'archived'};
		let message = await updateMessage(messageId, messageUpdates);
		req.result = message;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}