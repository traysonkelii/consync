const { getMessagesByChannelId, createMessage, getMessageById, updateMessage, getMessagesByParentId } = require("../services/databaseService");

module.exports = {};

module.exports.getMessagesByChannelId = async (req, res, next) => {
	let error;
	try {
		let channelId = req.params.channelId;
		let messages = await getMessagesByParentId('channelId', channelId);
		if (!req.result) {
			req.result = { messages };
		} else {
			req.result.messages = messages;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getMessagesByProjectId = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.projectId;
		let messages = await getMessagesByParentId('projectId', projectId);
		if (!req.result) {
			req.result = { messages };
		} else {
			req.result.messages = messages;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getMessagesByItemId = async (req, res, next) => {
	let error;
	try {
		let itemId = req.params.itemId;
		let messages = await getMessagesByParentId('itemId', itemId);
		if (!req.result) {
			req.result = { messages };
		} else {
			req.result.messages = messages;
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
	try {
		let messageObj = req.body;
		messageObj.authorId = req.user._id;
		messageObj.unreadBy = req.body.mentionedUserIds;
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
		req.result = { message };
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateMessageById = async (req, res, next) => {
	let error;
	try {
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
	try {
		let messageId = req.params.id;
		let messageUpdates = { status: 'archived' };
		let message = await updateMessage(messageId, messageUpdates);
		req.result = message;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getMessagesByThreadId = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let messages = await getMessagesByParentId('threadId', threadId);
		req.result.messages = messages;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}