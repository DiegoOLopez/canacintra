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

module.exports = router;
