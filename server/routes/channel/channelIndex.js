const express = require('express');
const router = express.Router();
const channelController = require('./channelController');

router.route('/')
	.post(channelController.createChannel)

router.route('/:channelId')
	.get(channelController.getChannel)
	.put(channelController.updateChannel)
	.delete(channelController.archiveChannel)

module.exports = router;