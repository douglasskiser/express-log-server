const path = require('path');

const paths = {
  ROOT: path.join(__dirname, '/../../')
};

const PORT = process.env.port || 3000;

module.exports = {
  paths,
  PORT
};
