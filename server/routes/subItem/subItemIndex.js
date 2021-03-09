const express = require('express');
const subItem = require('../../lib/database/models/subItem');
const router = express.Router();
const subItemController = require('./subItemController');

router.route('/')
	.post(subItemController.createSubItem)

router.route('/:id')
	.get(subItemController.getSubItem)
	.put(subItemController.updateSubItem)
	.delete(subItemController.archiveSubItem)

module.exports = router;