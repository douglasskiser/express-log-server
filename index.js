const express = require('express');
const config = require('./config');

const app = express();

require('./routes')(app);
require('./middle-wares')(app);

app.listen(config.PORT, '0.0.0.0', err => {
  return err ?
    console.error(err) :
    console.log(`Server is listening at http://localhost${config.PORT}`);
});
