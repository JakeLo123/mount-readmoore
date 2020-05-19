const Sequelize = require('sequelize');
const dbName = process.env.DB_NAME || 'readmore.test';
const db = new Sequelize(`postgres://user:pass@example.com:5432/${dbName}`);

module.exports = db;
