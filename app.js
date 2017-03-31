const express = require('express');
const config = require('./config');

const app = express();

require('./routes')(app);
require('./middlewares')(app);

module.exports = app;
