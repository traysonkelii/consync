const item = require('../../middleware/item');
const channel = require('../../middleware/channel');
const message = require('../../middleware/message');

module.exports.createItem = [
	item.createItem,
	channel.createMainChannel,
	item.return
]

module.exports.getMessageByItemId = [
	message.getMessagesByItemId,
	item.return
]

module.exports.updateItem = [
	item.updateItemById,
	item.return
]

module.exports.getItemById = [
	item.getItemById,
	channel.getChannelsByItemId,
	item.return
]

module.exports.archiveItem = [
	item.archiveItem,
	item.return
]