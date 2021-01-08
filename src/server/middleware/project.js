const { getProjectById, getProjects, createProject } = require("../services/databaseService");

module.exports = {};

module.exports.getProjectById = async (req, res, next) => {
	let projectId = req.params.id;
	let project = await getProjectById(projectId);
	req.result = project;
	next();
}

module.exports.getProjects = async (req, res, next) => {
	let filters = {};
	let projects = await getProjects(filters);
	req.result = projects;
	next();
}

module.exports.createProject = async (req, res, next) => {
	let projectObj = req.body;
	let project = await createProject(projectObj);
	req.result = project;
	next();
}

module.exports.return = (req, res) => {
	res.json(req.result);
};