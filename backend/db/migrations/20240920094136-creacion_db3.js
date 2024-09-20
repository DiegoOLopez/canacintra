'use strict';

const { PAGO_EMPRENDEDOR_VARIABLE, pagoEmprendedorSchema } = require('../models/pago_emprendedor.model');
const { PAGO_INVERSIONISTA_VARIABLE, pagoInversionistaSchema } = require('../models/pago_inversionista.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PAGO_EMPRENDEDOR_VARIABLE, pagoEmprendedorSchema);
    await queryInterface.createTable(PAGO_INVERSIONISTA_VARIABLE, pagoInversionistaSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PAGO_EMPRENDEDOR_VARIABLE);
    await queryInterface.dropTable(PAGO_INVERSIONISTA_VARIABLE);
  
  }
};
