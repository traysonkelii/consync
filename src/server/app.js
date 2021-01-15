const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const systemMiddleware = require('./middleware/system');
const routes = require('./routes');
const db = require('./lib/database/config');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(helmet()); // Provides some xss protections and hides headers from the client
app.use(systemMiddleware.requestLogging);

app.get('/healthcheck', systemMiddleware.healthCheck);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
sessionOptions = {
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}
if (process.env.NODE_ENV === 'production') {
	sessionOptions.cookie.secure = true;
}
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
var initPassport = require('./lib/passport/config.js');
app.use('/', routes);

app.use(systemMiddleware.notFoundHandler);
app.use(systemMiddleware.errorHandler);

module.exports = app;
