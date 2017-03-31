const express = require('express');
const config = require('./config');

const app = express();

require('./routes')(app);
require('./middle-wares')(app);

module.exports = app;
