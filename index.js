const server = require('./app');
const config = require('./config');

app.listen(config.PORT, '0.0.0.0', err => {
  return err ?
    console.error(err) :
    console.log(`Server is listening at http://localhost${config.PORT}`);
});
