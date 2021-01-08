const user = require('../../middleware/user');

module.exports.getUserById = [
	user.getUserById,
	user.return
]

module.exports.getUsers = [
	user.getUsers,
	user.return
]
