const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.use('/', controller);

module.exports = router;
