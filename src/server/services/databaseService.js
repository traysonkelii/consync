const Project = require('../lib/database/models/project');

let databaseService = {};

databaseService.getProject = async (projectId) => {
	let project = await Project.findById(projectId).exec();
	return project;
}

databaseService.getProjects = async (filters) => {
	let projects = await Project.find(filters).exec();
	return projects;
}

module.exports = databaseService;