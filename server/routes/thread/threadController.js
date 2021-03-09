const thread = require('../../middleware/thread');
const message = require('../../middleware/message')

module.exports.createThread = [
	thread.createThread,
	thread.return
]

module.exports.getThreadById = [
	thread.getThreadById,
	message.getMessagesByThreadId,
	thread.return
]