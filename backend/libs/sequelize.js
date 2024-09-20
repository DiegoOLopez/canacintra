const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
// Traemos el setup models de db/models
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
// POSTGRES
const URI = `postgres://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${config.db_name}`;

// Se incorpora el pool por detras
const sequelize = new Sequelize(URI, {
  // POSTGRES
  dialect: 'postgres',
  // MYSQL
  //dialect: 'mysql',
  logging: true
});;

setupModels(sequelize);


module.exports = sequelize;
