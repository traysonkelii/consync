const user = require('../../middleware/user');

module.exports.createUser = [
	user.createUser,
	user.return
]

module.exports.getUserById = [
	user.getUserById,
	user.return
]

module.exports.getUsers = [
	user.getUsers,
	user.return
]
