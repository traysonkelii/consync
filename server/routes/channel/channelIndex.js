const express = require('express');
const router = express.Router();
const channelController = require('./channelController');

router.route('/:id')
	.get(channelController.getChannelById)
	.put(channelController.updateChannel)
	.delete(channelController.archiveChannel)

router.route('/')
	.post(channelController.createChannel)

router.route('/:id/threads')
	.get(channelController.getThreadsForChannel)

module.exports = router;