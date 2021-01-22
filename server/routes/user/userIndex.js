const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.route('/')
	.get(userController.getUser)
	.post(userController.createUser);

router.route('/:id')
	.get(userController.getUserById)

router.route('/query')
	.post(userController.getUsers)

module.exports = router;