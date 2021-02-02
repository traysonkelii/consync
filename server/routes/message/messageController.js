const message = require('../../middleware/message');
const task = require('../../middleware/task');

module.exports.createMessage = [
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
