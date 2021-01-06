const express = require('express');
const router = express.Router();

router.use('/healthcheck', require('./healthcheck'));

module.exports = router;