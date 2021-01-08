const express = require('express');
const router = express.Router();

router.use('/healthcheck', require('./healthcheck'));
router.use('/project', require('./project/projectIndex'));
router.use('/user', require('./user/userIndex'));

module.exports = router;