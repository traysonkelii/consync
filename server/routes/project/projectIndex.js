const express = require('express');
const router = express.Router();
const projectController = require('./projectController');

router.route('/')
	.post(projectController.createProject)

router.route('/:projectId')
	.get(projectController.getProject)
	.delete(projectController.archiveProject)
	.put(projectController.updateProject)

router.route('/:projectId/status')
	.put(projectController.updateProjectStatus)

router.route('/query')
	.post(projectController.getProjects)

router.route('/:projectId/user/')
	.put(projectController.addUsersToProject);

router.route('/:projectId/messages')
	.get(projectController.getMessagesForProject);

router.route('/:projectId/user/:userId')
	.delete(projectController.removeUserFromProject)

module.exports = router;