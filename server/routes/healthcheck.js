let express = require('express');
let router = express.Router();

/* Test healthcheck endpoint */
router.get('/healthcheck', async (req, res, next) => {
	req.additionalLogs.status = 'ok';
	res.send({ status: 'ok' });
});

module.exports = router;
