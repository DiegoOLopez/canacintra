'use strict';

const { USUARIO_VARIABLE, usuarioSchema } = require('../models/usuario.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_VARIABLE, usuarioSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_VARIABLE);

  
  }
};
