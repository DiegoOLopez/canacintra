const express = require('express');

const PagoEmprendedorService = require('../services/pago_emprendedor.service.js');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionPagoEmprendedor, actualizacionPagoEmprendedor, buscaPagoEmprendedor } = require('../schemas/pago_emprendedor.schema.js');

const router = express.Router();

const service = new PagoEmprendedorService();

// Listar todos los pagos de emprendedores
router.get('/', async (req, res, next) => {
    try {
        const pagos_emprendedores = await service.find();
        res.json(pagos_emprendedores);
    } catch (error) {
        next(error);
    }
});

// Obtener un pago de emprendedor 
router.get('/:id_pago_emprendedor', validatorHandler(buscaPagoEmprendedor, 'params'), async (req, res, next) => {
    const { id_pago_emprendedor } = req.params;
    try {
        const pago_emprendedor = await service.findById(id_pago_emprendedor);
        res.json(pago_emprendedor);
    } catch (error) {
        next(error);
    }
});

// Crear un pago de emprendedor
router.post('/', validatorHandler(creacionPagoEmprendedor), async (req, res, next) => {
    const body = req.body;
    try {
        const pago_emprendedor = await service.create(body);
        res.status(201).json(pago_emprendedor);
    } catch (error) {
        next(error);
    }
});

// Actualizar un pago de emprendedor
router.patch('/:id_pago_emprendedor', validatorHandler(buscaPagoEmprendedor, 'params'), validatorHandler(actualizacionPagoEmprendedor), async (req, res, next) => {
    const { id_pago_emprendedor } = req.params;
    const body = req.body;
    try {
        const pago_emprendedor = await service.updateById(id_pago_emprendedor, body);
        res.json(pago_emprendedor);
    } catch (error) {
        next(error);
    }
});

// Eliminar un pago de emprendedor
router.delete('/:id_pago_emprendedor', validatorHandler(buscaPagoEmprendedor, 'params'), async (req, res, next) => {
    const { id_pago_emprendedor } = req.params;
    try {
        const pago_emprendedor = await service.deleteById(id_pago_emprendedor);
        res.json(pago_emprendedor);
    } catch (error) {
        next(error);
    }
});

module.exports = router;