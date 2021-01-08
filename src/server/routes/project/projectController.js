const project = require('../../middleware/project');

module.exports.getProject = [
	project.getProject,
	project.return
]
