const express = require('express');
const boom = require('boom');

const app = express();

app.get('/', (req, res) => res.sendStatus(200));
app.get('/feed', require('./feed').router);

// Catch all for other routes
app.all('*', (req, res, next) => next(boom.notFound()));

module.exports = app;
