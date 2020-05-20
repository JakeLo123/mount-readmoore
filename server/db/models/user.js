const Sequelize = require('sequelize');
const db = require('../db');
const crypto = require('crypto');

const User = db.define(
  'user',
  {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        validPassword(candidatePassword) {
          const upper = RegExp('[A-Z]+');
          const lower = RegExp('[a-z]+');
          const number = RegExp('[0-9]');
          if (
            !candidatePassword.length >= 8 ||
            !upper.test(candidatePassword) ||
            !lower.test(candidatePassword) ||
            !number.test(candidatePassword)
          ) {
            throw new Error('invalid password!');
          }
        },
      },
    },
    salt: Sequelize.STRING,
  },
  {
    hooks: {
      beforeCreate: setSaltAndPassword,
      beforeUpdate: setSaltAndPassword,
    },
  }
);

User.prototype.hasCorrectPassword = function (candidatePassword) {
  return encryptPassword(candidatePassword, this.salt) === this.password;
};

// utility functions
function generateSalt() {
  return crypto.randomBytes(16).toString('base64');
}

function setSaltAndPassword(user) {
  user.salt = generateSalt();
  user.password = encryptPassword(user.password, user.salt);
}

function encryptPassword(plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
}

module.exports = User;
