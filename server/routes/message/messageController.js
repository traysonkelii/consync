const message = require('../../middleware/message');
const task = require('../../middleware/task');
const thread = require('../../middleware/thread');

module.exports.createMessage = [
	thread.threadMessage,
	message.createMessage,
	message.return
]

module.exports.updateMessage = [
	message.updateMessageById,
	message.return
]

module.exports.getMessageById = [
	message.getMessageById,
	task.getTasksByMessageId,
	message.return
]

module.exports.archiveMessage = [
	message.archiveMessage,
	message.return
]
