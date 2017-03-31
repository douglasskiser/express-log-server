const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('/* Route', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'NoError');
      t.end();
    })
});

test('/log Route', t => {
  request(app)
    .post('/log')
    .send({payload: {type: 'TEST_LOG'}})
    .end((err, res) => {
      t.error(err, 'NoError');
      t.end();
    })
});
