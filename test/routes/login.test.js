const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');

test('Test /login route', (t) => {
  const userInfo = {
    email: 'ola200@gmail.com',
    password: '123456789',
  };
  dbBuild()
    .then(() => dbFakeData())
    .then(() => {
      supertest(app)
        .post('/api/v1/login')
        .send(userInfo)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(
              res.body.message,
              1,
              'you are login successfully and user id 1',
            );
            t.end();
          }
        });
    })
    .catch(t.error);
});
