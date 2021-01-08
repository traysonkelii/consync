const { getUserById, getUsers } = require("../services/databaseService");

module.exports = {};

module.exports.getUserById = async (req, res, next) => {
	let userId = req.params.id;
	let user = await getUserById(userId);
	req.result = user;
	next();
}

module.exports.getUsers = async (req, res, next) => {
	let filters = {};
	let users = await getUsers(filters);
	req.result = users;
	next();
}

module.exports.return = (req, res) => {
	res.json(req.result);
};