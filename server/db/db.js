const Sequelize = require('sequelize');
const dbName =
  process.env.NODE_ENV === 'test' ? 'readmoore.test' : 'readmoore.development';

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
