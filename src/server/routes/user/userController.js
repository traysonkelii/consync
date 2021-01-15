const user = require('../../middleware/user');
const auth = require('../../middleware/auth')

module.exports.getUser = [
	auth.secure,
	user.getUser,
	user.return
]

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
