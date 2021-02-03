const { getProjectById, getProjects, createProject, updateProjectById } = require("../services/databaseService");

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

module.exports.updateProjectById = async (req, res, next) => {
	let error;
	try{
		let projectId = req.params.id;
		let projectUpdates = req.body;
		let project = updateProjectById(projectId, projectUpdates);
		req.result = project;
	} catch (err) {
		error = err;
		err.status = 400;
	}
	next(error);
}

module.exports.return = (req, res, next) => {
	res.json(req.result);
};