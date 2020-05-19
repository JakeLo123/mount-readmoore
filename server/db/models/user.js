const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
