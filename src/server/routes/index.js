const express = require('express');
const router = express.Router();

router.use('/healthcheck', require('./healthcheck'));
router.use('/project', require('./project/projectIndex'));

module.exports = router;