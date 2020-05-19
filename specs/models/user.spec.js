const { expect } = require('chai');
const Sequelize = require('sequelize');
const { User, db } = require('../../server/db');

describe('User', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });
  describe('validations', () => {
    it('must have a username', (done) => {
      User.create()
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
  });
});
