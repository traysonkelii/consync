const { createTask, getTaskById, updateTask, getTasksByMessageId, getTasksCreatedByUser, getTasksAssignedToUser } = require("../services/databaseService");

module.exports = {};

module.exports.getTasksAssignedToUser = async (req, res, next) => {
	let error;
	try {
		let userId = req.params.id;
		let tasks = await getTasksAssignedToUser(userId);
		if(!req.result) {
			req.result = {tasks};
		} else {
			req.result.tasks = task;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getTasksCreatedByUser = async (req, res, next) => {
	let error;
	try {
		let userId = req.params.id;
		let tasks = await getTasksCreatedByUser(userId);
		if(!req.result) {
			req.result = {tasks};
		} else {
			req.result.tasks = task;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};

module.exports.getTasksByMessageId = async (req, res, next) => {
	let error;
	try {
		let messageId = req.params.id;
		let tasks = await getTasksByMessageId(messageId);
		if(!req.result) {
			req.result = {tasks};
		} else {
			req.result.tasks = task;
		}
	}
	catch (err) {
		error = err;
		error.status = 400;
	}
	next(error);
};



module.exports.createTask = async (req, res, next) => {
	let error;
	try{
		let taskObj = req.body;
		let task = createTask(taskObj);
		req.result = task;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.getTaskById = async (req, res, next) => {
	let error;
	try {
		let taskId = req.params.id;
		let task = getTaskById(taskId);
		req.result = task;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.updateTaskById = async (req, res, next) => {
	let error;
	try{
		let taskId = req.params.id;
		let taskUpdates = req.body;
		let task = updateTask(taskId, taskUpdates);
		req.result = task;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.archiveTask = async (req, res, next) => {
	let error;
	try{
		let taskId = req.params.id;
		let taskUpdates = {status: 'archived'};
		let task = updateTask(taskId, taskUpdates);
		req.result = task;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
}