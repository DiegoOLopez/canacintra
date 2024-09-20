const express = require('express');

const OportunidadService = require('../services/oportunidad.service');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionOportunidadSchema, actualizacionOportunidadSchema, busquedaOportunidadSchema } = require('../schemas/oportunidad.schema');

const router = express.Router();

const service = new OportunidadService();