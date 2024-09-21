const express = require('express');
const passport = require('passport');

const PropuestaService = require('../services/propuesta.service.js');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionPropuesta, actualizacionPropuesta, buscaPropuesta } = require('../schemas/propuesta.schema.js');
const { checkAdminRole } = require('../middlewares/auth.handler.js');


const router = express.Router();

const service = new PropuestaService();

// Listar todas las propuestas
router.get('/', async (req, res, next) => {
    try {
        const propuestas = await service.find();
        res.json(propuestas);
    } catch (error) {  
        next(error);
    }
});

// Obtener una propuesta
router.get('/:id_propuesta', validatorHandler(buscaPropuesta, 'params'), async (req, res, next) => {
    const { id_propuesta } = req.params;
    try {
        const propuesta = await service.findById(id_propuesta);
        res.json(propuesta);
    } catch (error) {
        next(error);
    }
});

// Crear una propuesta
router.post('/', async (req, res, next) => {
    const body = req.body;
    try {
        const propuesta = await service.create(body);
        res.status(201).json(propuesta);
    } catch (error) {
        next(error);
    }
});

// Actualizar una propuesta
router.patch('/:id_propuesta', validatorHandler(buscaPropuesta, 'params'), validatorHandler(actualizacionPropuesta), async (req, res, next) => {
    const { id_propuesta } = req.params;
    const body = req.body;
    try {
        const propuesta = await service.updateById(id_propuesta, body);
        res.json(propuesta);
    } catch (error) {
        next(error);
    }
});

// Eliminar una propuesta
router.delete('/:id_propuesta', validatorHandler(buscaPropuesta, 'params'), async (req, res, next) => {
    const { id_propuesta } = req.params;
    try {
        const propuesta = await service.deleteById(id_propuesta);
        res.json(propuesta);
    } catch (error) {
        next(error);
    }
});

module.exports = router;