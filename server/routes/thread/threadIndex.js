const express = require('express');
const router = express.Router();
const threadController = require('./threadController');

router.route('/')
	.post(threadController.createThread)

router.route('/:id')
	.get(threadController.getThreadById)

module.exports = router;