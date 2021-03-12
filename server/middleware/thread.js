const { getThreadsBySubItemId, createThread, getThreadById, updateThread, getThreadsByThreadId, addParticipantsToThread } = require("../services/databaseService");

module.exports = {};


module.exports.createThread = async (req, res, next) => {
	let error;
	try {
		let threadObj = req.body;
		let thread = await createThread(threadObj);
		req.result = { thread };
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.threadMessage = async (req, res, next) => {
	let error;
	try {
		let thread;
		let participants = req.body.mentionedUserIds;
		if (participants) {
			participants.push(req.user._id);
			participants = [...new Set(participants)];
		} else {
			participants = [req.user._id];
		}
		if (req.body.threadId) {
			thread = await addParticipantsToThread(req.body.threadId, participants);
		} else {
			let threadObj = {
				projectId: req.body.projectId,
				itemId: req.body.itemId,
				subItemId: req.body.subItemId,
				partricipants
			}
			thread = await createThread(threadObj);
		}
		req.body.threadId = thread._id;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getThreadById = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let thread = await getThreadById(threadId);
		req.result = { thread };
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getThreadsBySubItemId = async (req, res, next) => {
	let error;
	try {
		let threadId = req.params.id;
		let threads = await getThreadsBySubItemId(threadId);
		req.result.threads = threads;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}