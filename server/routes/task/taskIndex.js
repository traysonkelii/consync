const express = require('express');
const router = express.Router();
const taskController = require('./taskController');

router.route('/')
	.post(taskController.createTask)
	.put(taskController.updateTask)
	.delete(taskController.archiveTask)

router.route('/:id')
	.get(taskController.getTaskById)

module.exports = router;