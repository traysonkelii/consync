const { getProjectById, getProjects, createProject } = require("../services/databaseService");

module.exports = {};

module.exports.getProjectById = async (req, res, next) => {
	let error;
	try {
		let projectId = req.params.id;
		let project = await getProjectById(projectId);
		req.result = project;
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

module.exports.return = (req, res) => {
	res.json(req.result);
};