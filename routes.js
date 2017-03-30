const logIt = require('./logger');

module.exports = app => {
  app.get('*', (req, res) => {
    return res.send(200, 'You have reached the NGVA log server');
  });
  

  app.post('/log', (req, res) => {
      const payload = req.body;

      logIt(payload);

      return res.sendStatus(200);
  });

  return app;
};
