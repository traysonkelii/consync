const item = require('../../middleware/item');
const subItem = require('../../middleware/subItem');
const message = require('../../middleware/message');

module.exports.createItem = [
	item.createItem,
	subItem.createMainSubItem,
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
	subItem.getSubItemsByItemId,
	item.return
]

module.exports.archiveItem = [
	item.archiveItem,
	item.return
]