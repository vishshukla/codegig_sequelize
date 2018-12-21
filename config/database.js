const Sequelize = require('sequelize');
const pass = require('./pass');
module.exports = new Sequelize('codegig', 'postgres', `${pass}`, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
