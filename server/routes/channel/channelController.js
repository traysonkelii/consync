const channel = require('../../middleware/channel');
const thread = require('../../middleware/thread');

module.exports.createChannel = [
	channel.createChannel,
	channel.return
]

module.exports.updateChannel = [
	channel.updateChannelById,
	channel.return
]

module.exports.getChannelById = [
	channel.getChannelById,
	thread.getThreadsByChannelId,
	channel.return
]

module.exports.archiveChannel = [
	channel.archiveChannel,
	channel.return
]