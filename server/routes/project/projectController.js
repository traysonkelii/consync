const project = require('../../middleware/project');

module.exports.getProject = [
	project.getProjectById,
	project.return
]

module.exports.getProjects = [
	project.getProjects,
	project.return
]

module.exports.createProject = [
	project.createProject,
	project.return
]
