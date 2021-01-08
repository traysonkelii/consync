const { getUserById, getUsers, createUser } = require("../services/databaseService");

module.exports = {};

module.exports.getUserById = async (req, res, next) => {
	let error;
	try {
		let userId = req.params.id;
		let user = await getUserById(userId);
		req.result = user;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.getUsers = async (req, res, next) => {
	let error;
	try {
		let filters = {};
		let users = await getUsers(filters);
		req.result = users;
	} catch (err) {
		error = err
	}
	next(error);
}

module.exports.createUser = async (req, res, next) => {
	let error;
	try {
		let userObj = req.body;
		let user = await createUser(userObj);
		req.result = user;
	} catch (err) {
		error = err;
	}
	next(error);
}

module.exports.return = (req, res) => {
	res.json(req.result);
};