const Sequelize = require('sequelize');

const sequelize = new Sequelize('invitego', 'postgres', 'password', {
  dialect: 'postgres',
  host: 'localhost',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models and relationships here

module.exports = db;
