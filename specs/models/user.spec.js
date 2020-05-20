const { expect } = require('chai');
const Sequelize = require('sequelize');
const { User, db } = require('../../server/db');

describe('User', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });
  describe('validations', () => {
    it('must have a username', (done) => {
      User.create({ password: 'secretpassword' })
        .then(() => {
          done('username validation did not work');
        })
        .catch((err) => {
          expect(err.errors[0].message).to.equal(
            'user.username cannot be null'
          );
          done();
        });
    });
    it('must have a password', (done) => {
      User.create({ username: 'jimmy' })
        .then(() => {
          done('username validation did not work');
        })
        .catch((err) => {
          expect(err.errors[0].message).to.equal(
            'user.password cannot be null'
          );
          done();
        });
    });
  });
});
