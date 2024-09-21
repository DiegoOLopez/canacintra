const express = require('express');

const OportunidadService = require('../services/oportunidad.service');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionOportunidadSchema, actualizacionOportunidadSchema, busquedaOportunidadSchema } = require('../schemas/oportunidad.schema');

const router = express.Router();

const service = new OportunidadService();

const { checkAdminRole } = require('../middlewares/auth.handler.js');

// Lista todos los usuarios
router.get('/', async (req, res, next) => {
    try {
        const oportunidades = await service.find();
        res.json(oportunidades);
    } catch (error) {
        next(error);
    }
});

// Obtener una oportunidad
router.get('/:id_oportunidad', validatorHandler(busquedaOportunidadSchema, 'params'), async (req, res, next) => {
    const { id_oportunidad } = req.params;
    try {
        const oportunidad = await service.findById(id_oportunidad);
        res.json(oportunidad);
    } catch (error) {
        next(error);
    }
});

// Crear una oportunidad
router.post('/', validatorHandler(creacionOportunidadSchema), async (req, res, next) => {
    const body = req.body;
    try {
        const oportunidad = await service.create(body);
        res.status(201).json(oportunidad);
    } catch (error) {
        next(error);
    }
});

// Actualizar una oportunidad
router.patch('/:id_oportunidad', validatorHandler(busquedaOportunidadSchema, 'params'), validatorHandler(actualizacionOportunidadSchema), async (req, res, next) => {    
    const { id_oportunidad } = req.params;
    const body = req.body;
    try {
        const oportunidad = await service.updateById(id_oportunidad, body);
        res.json(oportunidad);
    } catch (error) {
        next(error);
    }
});

// Eliminar una oportunidad
router.delete('/:id_oportunidad', validatorHandler(busquedaOportunidadSchema, 'params'), async (req, res, next) => {
    const { id_oportunidad } = req.params;
    try {
        const oportunidad = await service.deleteById(id_oportunidad);
        res.json(oportunidad);
    } catch (error) {
        next(error);
    }
});

module.exports = router;