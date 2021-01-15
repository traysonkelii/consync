module.exports = {};

module.exports.secure = (req, res, next) => {
	if (req.user) { return next(); }
	req.session.returnTo = req.originalUrl;
	res.redirect('/login');
};