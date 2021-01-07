const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const systemMiddleware = require('./middleware/system');
const routes = require('./routes');
let db = require('./lib/database/config');

const app = express();

app.use(helmet()); // Provides some xss protections and hides headers from the client
app.use(systemMiddleware.requestLogging);

app.get('/healthcheck', systemMiddleware.healthCheck);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.use(systemMiddleware.notFoundHandler);
app.use(systemMiddleware.errorHandler);

module.exports = app;
