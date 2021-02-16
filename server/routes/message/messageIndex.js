const express = require('express');
const router = express.Router();
const messageController = require('./messageController');

router.route('/')
	.post(messageController.createMessage)
	.put(messageController.updateMessage)
	.delete(messageController.archiveMessage)

router.route('/:id')
	.get(messageController.getMessageById)

module.exports = router;