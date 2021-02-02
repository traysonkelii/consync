const thread = require('../../middleware/thread');
const message = require('../../middleware/message');

module.exports.getThread = [
	thread.getThreadById,
	message.getMessagesByThreadId,
	thread.return
]

module.exports.updateThread = [
	thread.updateThread,
	thread.return
]

module.exports.createThread = [
	thread.createThread,
	thread.return
]

module.exports.archiveThread = [
	thread.archiveThread,
	thread.return
]