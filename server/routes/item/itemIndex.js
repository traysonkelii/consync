const express = require('express');
const router = express.Router();
const itemController = require('./itemController');

router.route('/:id')
	.get(itemController.getItemById)
	.put(itemController.updateItem)
	.delete(itemController.archiveItem)

router.route('/')
	.post(itemController.createItem)

module.exports = router;