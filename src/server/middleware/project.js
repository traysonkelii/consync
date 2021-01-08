const { getProject } = require("../services/databaseService");

module.exports = {};

module.exports.getProject = async (req, res, next) => {
	let projectId = req.params.id;
	console.log('projectId', projectId);
	let project = await getProject(projectId);
	req.result = { project };
	next();
}

module.exports.return = (req, res) => {
	res.json(req.result);
};