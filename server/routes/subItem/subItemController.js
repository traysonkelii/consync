const subItem = require('../../middleware/subItem');
const message = require('../../middleware/message');

module.exports.getSubItem = [
	subItem.getSubItemById,
	message.getMessagesBySubItemId,
	subItem.return
]

module.exports.updateSubItem = [
	subItem.updateSubItem,
	subItem.return
]

module.exports.createSubItem = [
	subItem.createSubItem,
	subItem.return
]

module.exports.archiveSubItem = [
	subItem.archiveSubItem,
	subItem.return
]