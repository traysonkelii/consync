const express = require('express');
const { updateProjectById } = require('../../services/databaseService');
const router = express.Router();
const projectController = require('./projectController');

router.route('/')
	.post(projectController.createProject)

router.route('/:id')
	.get(projectController.getProject)
	.put(projectController.updateProject)

router.route('/query')
	.post(projectController.getProjects)

router.route('/:id/channels')
	.get(projectController.getChannelsForProject)

module.exports = router;