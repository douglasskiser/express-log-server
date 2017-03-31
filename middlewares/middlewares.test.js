const test = require('tape');

function App(){
  this.middlewares = 0;
  this.use = function() {
    this.middlewares++;
  };
};

test('middlewares', t => {
  const app = new App();
  const appWithMiddleWares = require('./index')(app);
  const expectedMiddlewaresLength = 2;

  t.same(appWithMiddleWares.middlewares, expectedMiddlewaresLength, 'Middlewares were added to app');
  t.end();
});
