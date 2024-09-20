const express = require('express');

const InversionService = require('../services/inversion.service');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionInversionSchema, actualizacionInversionSchema, busquedaInversionSchema } = require('../schemas/inversion.schema');

const router = express.Router();

const service = new InversionService();

// Listar todas las inversiones
router.get('/', async (req, res, next) => {
    try {
        const inversiones = await service.find();
        res.json(inversiones);
    } catch (error) {
        next(error);
    }
});

// Obtener una inversion
router.get('/:id_inversion', validatorHandler(busquedaInversionSchema, 'params'), async (req, res, next) => {
    const { id_inversion } = req.params;
    try {
        const inversion = await service.findById(id_inversion);
        res.json(inversion);
    } catch (error) {
        next(error);
    }
});

// Crear una inversion
router.post('/', validatorHandler(creacionInversionSchema), async (req, res, next) => {
    const body = req.body;
    try {
        const inversion = await service.create(body);
        res.status(201).json(inversion);
    } catch (error) {
        next(error);
    }
});

// Actualizar una inversion
router.patch('/:id_inversion', validatorHandler(busquedaInversionSchema, 'params'), validatorHandler(actualizacionInversionSchema), async (req, res, next) => {
    const { id_inversion } = req.params;
    const body = req.body;
    try {
        const inversion = await service.updateById(id_inversion, body);
        res.json(inversion);
    } catch (error) {
        next(error);
    }
});

// Eliminar una inversion
router.delete('/:id_inversion', validatorHandler(busquedaInversionSchema, 'params'), async (req, res, next) => {
    const { id_inversion } = req.params;
    try {
        await service.deleteById(id_inversion);
        res.status(204).json();
    } catch (error) {
        next(error);
    }
});

module.exports = router;