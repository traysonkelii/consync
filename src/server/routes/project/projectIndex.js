const express = require('express');
const router = express.Router();
const projectController = require('./projectController');

router.route('/:id')
	.get(projectController.getProject)

module.exports = router;