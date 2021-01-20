const express = require('express');
const router = express.Router();

var path = require('path');

router.get('/', function (req, res, next) {
	var filePath = path.join(__dirname, '..', 'dist/angular-consync', 'index.html');
	res.sendFile(filePath);
	res.json('This will be the homepage')
});

// router.use('/', require('./auth/auth'))
router.use('/healthcheck', require('./healthcheck'));
router.use('/project', require('./project/projectIndex'));
router.use('/user', require('./user/userIndex'));

module.exports = router;