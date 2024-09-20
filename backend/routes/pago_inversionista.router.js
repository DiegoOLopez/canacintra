const express = require('express');

const PagoInversionistaService = require('../services/pago_inversionista.service');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionPagoInversionista, actualizacionPagoInversionista, buscaPagoInversionista } = require('../schemas/pago_inversionista.schema.js');

const router = express.Router();

const service = new PagoInversionistaService();

// Listar todos los pagos de inversionistas
router.get('/', async (req, res, next) => {
    try {
        const pagos_inversionistas = await service.find();
        res.json(pagos_inversionistas);
    } catch (error) {
        next(error);
    }
});

// Obtener un pago de inversionista
router.get('/:id_pago_inversionista', validatorHandler(buscaPagoInversionista, 'params'), async (req, res, next) => {
    const { id_pago_inversionista } = req.params;
    try {
        const pago_inversionista = await service.findById(id_pago_inversionista);
        res.json(pago_inversionista);
    } catch (error) {
        next(error);
    }
}); 

// Crear un pago de inversionista
router.get('/', validatorHandler(creacionPagoInversionista), async (req, res, next) => {   
    const body = req.body;
    try {
        const pago_inversionista = await service.create(body);
        res.status(201).json(pago_inversionista);
    } catch (error) {
        next(error);
    }
});

// Actualizar un pago de inversionista
router.patch('/:id_pago_inversionista', validatorHandler(buscaPagoInversionista, 'params'), validatorHandler(actualizacionPagoInversionista), async (req, res, next) => {
    const { id_pago_inversionista } = req.params;
    const body = req.body;
    try {
        const pago_inversionista = await service.updateById(id_pago_inversionista, body);
        res.json(pago_inversionista);
    } catch (error) {
        next(error);
    }
});

// Eliminar un pago de inversionista
router.delete('/:id_pago_inversionista', validatorHandler(buscaPagoInversionista, 'params'), async (req, res, next) => {
    const { id_pago_inversionista } = req.params;
    try {
        const pago_inversionista = await service.deleteById(id_pago_inversionista);
        res.json(pago_inversionista);
    } catch (error) {
        next(error);
    }
});

module.exports = router;