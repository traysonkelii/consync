const project = require('../../middleware/project');
const channel = require('../../middleware/channel');

module.exports.getProject = [
	project.getProjectById,
	channel.getChannelsByProjectId,
	project.return
]

module.exports.updateProject = [
	project.updateProjectById,
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