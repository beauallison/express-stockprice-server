const boom = require('boom');
const express = require('express');

const app = express();

app.use('/', express.static('public'));
app.get('/feed', require('./feed').router);

// Catch all for other routes
app.all('*', (req, res) => res.send(boom.notFound()));

module.exports = app;
