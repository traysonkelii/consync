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

module.exports.archiveProject = [
	project.archiveProject,
	project.return
]

module.exports.updateProjectStatus = [
	project.updateProjectStatus,
	project.return
]

module.exports.updateProject = [
	project.updateProject,
	project.return
]

module.exports.addUsersToProject = [
	project.addUsersToProject,
	project.return
]

module.exports.removeUserFromProject = [
	project.removeUserFromProject,
	project.return
]
