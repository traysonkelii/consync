const express = require('express');
const router = express.Router();
const projectController = require('./projectController');

router.route('/')
	.post(projectController.createProject)

router.route('/:id')
	.get(projectController.getProject)
	.delete(projectController.archiveProject)
	.put(projectController.updateProject)

router.route('/:projectId/status')
	.put(projectController.updateProjectStatus)

router.route('/query')
	.post(projectController.getProjects)

router.route('/:projectId/user/')
	.put(projectController.addUsersToProject);

router.route('/:projectId/user/:userId')
	.put(projectController.removeUserFromProject)

module.exports = router;