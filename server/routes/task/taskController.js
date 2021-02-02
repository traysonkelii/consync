const task = require('../../middleware/task');

module.exports.createTask = [
	task.createTask,
	task.return
]

module.exports.updateTask = [
	task.updateTaskById,
	task.return
]

module.exports.getTaskById = [
	task.getTaskById,
	task.return
]

module.exports.archiveTask = [
	task.archiveTask,
	task.return
]
