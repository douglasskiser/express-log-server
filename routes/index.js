const logIt = require('../logger');

module.exports = app => {
  app.get('*', (req, res) => {
    return res.sendStatus(200);
  });

  app.post('/log', (req, res) => {
      const payload = req.body;

      logIt(payload);

      return res.sendStatus(200);
  });

  return app;
};
