'use strict';

const { PROPUESTA_VARIABLE, propuestaSchema } = require('../models/propuesta.model');
const { OPORTUNIDAD_VARIABLE, oportunidadSchema } = require('../models/oportunidad.model');
const { INVERSION_VARIABLE, inversionSchema } = require('../models/inversion.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PROPUESTA_VARIABLE, propuestaSchema);
    await queryInterface.createTable(OPORTUNIDAD_VARIABLE, oportunidadSchema);
    await queryInterface.createTable(INVERSION_VARIABLE, inversionSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PROPUESTA_VARIABLE);
    await queryInterface.dropTable(OPORTUNIDAD_VARIABLE);
    await queryInterface.dropTable(INVERSION_VARIABLE);

  
  }
};
