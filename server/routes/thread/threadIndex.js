const express = require('express');
const thread = require('../../lib/database/models/thread');
const router = express.Router();
const threadController = require('./threadController');

router.route('/')
	.post(threadController.createThread)

router.route('/:id')
	.get(threadController.getThread)
	.put(threadController.updateThread)
	.delete(threadController.archiveThread)

module.exports = router;