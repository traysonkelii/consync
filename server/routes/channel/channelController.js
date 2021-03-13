const channel = require('../../middleware/channel');
const message = require('../../middleware/message');

module.exports.getChannel = [
	channel.getChannelById,
	message.getMessagesByChannelId,
	channel.return
]

module.exports.updateChannel = [
	channel.updateChannel,
	channel.return
]

module.exports.createChannel = [
	channel.createChannel,
	channel.return
]

module.exports.archiveChannel = [
	channel.archiveChannel,
	channel.return
]