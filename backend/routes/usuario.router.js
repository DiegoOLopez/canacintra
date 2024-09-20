const express = require('express');

const UsuarioService = require('../services/usuario.service');

const validatorHandler = require('../middlewares/validator.handler.js');

const { creacionUsuarioSchema, actualizacionUsuarioSchema, busquedaUsuarioSchema } = require('../schemas/usuario.schema');

const router = express.Router();

const service = new UsuarioService();

// Listar todos los usuarios
router.get('/', async (req, res, next) => {
    try {
        const usuarios = await service.find();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
});

// Obtener un usuario
router.get('/:id_usuario', validatorHandler(busquedaUsuarioSchema, 'params'), async (req, res, next) => {
    const { id_usuario } = req.params;
    try {
        const usuario = await service.findById(id_usuario);
        res.json(usuario);
    } catch (error) {
        next(error);
    }
});

// Crear un usuario
router.post('/', validatorHandler(creacionUsuarioSchema), async (req, res, next) => {
    const body = req.body;
    try {
        const usuario = await service.create(body);
        res.status(201).json(usuario);
    } catch (error) {
        next(error);
    }
});

// Actualizar un usuario
router.patch('/:id_usuario', validatorHandler(busquedaUsuarioSchema, 'params'), validatorHandler(actualizacionUsuarioSchema), async (req, res, next) => {
    const { id_usuario } = req.params;
    const body = req.body;
    try {
        const usuario = await service.updateById(id_usuario, body);
        res.json(usuario);
    } catch (error) {
        next(error);
    }
});

// Eliminar un usuario
router.delete('/:id_usuario', validatorHandler(busquedaUsuarioSchema, 'params'), async (req, res, next) => {
    const { id_usuario } = req.params;
    try {
        const usuario = await service.deleteById(id_usuario);
        res.status(204).json(usuario);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
