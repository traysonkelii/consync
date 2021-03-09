const { getProjectById, getProjects, createProject, archiveProject, addUserToProject, updateProjectStatus, updateProject, removeUserFromProject } = require("../services/databaseService");

module.exports = {};

module.exports.getProjectById = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.id;
		let project = await getProjectById(projectId);
		req.result = {project};
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.getProjects = async (req, res, next) => {
	let error;
	try {
		let filters = {};
		let projects = await getProjects(filters);
		req.result = projects;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.createProject = async (req, res, next) => {
	let error;
	try {
		let projectObj = req.body;
		let project = await createProject(projectObj);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.archiveProject = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.id;
		let project = await archiveProject(projectId);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.addUsersToProject = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.projectId;
		let userIds = req.body.userIds;
		let project = await addUserToProject(projectId, userIds);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.updateProjectStatus = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.projectId;
		let status = req.body.status;
		let project = await updateProjectStatus(projectId, status);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.updateProject = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.projectId;
		let fieldsToUpdate = req.body;
		let project = await updateProject(projectId, fieldsToUpdate);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.removeUserFromProject = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.projectId;
		let userId = req.params.userId;
		let project = await removeUserFromProject(projectId, userId);
		req.result = project;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.return = (req, res) => {
	res.json(req.result);
};