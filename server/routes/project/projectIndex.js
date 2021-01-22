const express = require('express');
const router = express.Router();
const projectController = require('./projectController');

router.route('/')
	.post(projectController.createProject)

router.route('/:id')
	.get(projectController.getProject)

router.route('/query')
	.post(projectController.getProjects)

module.exports = router;