const express = require('express');
const router = express.Router();
var path = require('path');

const root = path.join(__dirname, '..', '..', '..', 'app/public');
router.use('/company', require('./company/companyIndex'));
router.use('/healthcheck', require('./healthcheck'));
router.use('/item', require('./item/itemIndex'));
router.use('/message', require('./message/messageIndex'));
router.use('/project', require('./project/projectIndex'));
router.use('/task', require('./task/taskIndex'));
router.use('/subItem', require('./subItem/subItemIndex'));
router.use('/user', require('./user/userIndex'));


router.get('*.*', express.static(root, { maxAge: '1y' }));
router.all('*', function (req, res) {
	res.status(200).sendFile(`/`, { root: root });
});

module.exports = router;
