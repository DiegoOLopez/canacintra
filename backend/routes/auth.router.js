const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

const router = express.Router();

router.post('/', 
    passport.authenticate('local', { session: false }), 
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                sub: user.id_usuario,  // 'sub' es un campo estándar que se usa para el id del usuario en JWT
                tipo: user.tipo,       // Incluye el tipo de usuario (rol)
                nombre: user.nombre,
                correo: user.correo,
            }
            const token = jwt.sign(payload, config.jwtSecret);
            res.json({
                user,
                token
            });
        } catch (error) {
            next(error);
        }
});

module.exports = router;