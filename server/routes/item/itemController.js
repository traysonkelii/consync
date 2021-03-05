const item = require('../../middleware/item');
const subItem = require('../../middleware/subItem');

module.exports.createItem = [
	item.createItem,
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