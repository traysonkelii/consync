const express = require('express');
const router = express.Router();
const itemController = require('./itemController');

router.route('/:itemId')
	.get(itemController.getItemById)
	.put(itemController.updateItem)
	.delete(itemController.archiveItem)

router.route('/:itemId/messages')
	.get(itemController.getMessageByItemId);

router.route('/')
	.post(itemController.createItem)

module.exports = router;