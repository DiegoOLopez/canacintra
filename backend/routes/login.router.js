const express = require('express');
// Importamos jwt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Importamos los modelos
const { models } = require('../libs/sequelize.js');

// JWT SECRET
const JWT_SECRET = 'tu_secreto'

// Creamos un router 
const router = express.Router();

// Funcion post para el login
router.post('/login', async (req, res) => {
    const { email, contrasenia } = req.body;
    // Buscamos el usuario por email
    try {
        // Buscamos el usuario por email
        const usuario = await models.Usuario.findOne(
            { where: { correo: email}}
        )
        // Si el usuario no existe
        if (!usuario){
            return res.status(401).json({ message: "Usuario o contraseña incorrectos"})
        }

        // Comparar contraseñas
        const contrasenia_valida = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if(!contrasenia_valida){
            return res.status(401).json({ message: "Usuario o contraseña incorrectos"})
        }

        // Crear un token JWT
        const token = jwt.sign({ id: usuario.id_usuario, email: usuario.correo }, JWT_SECRET, { expiresIn: '1h'});
        return res.json({ token});
    } catch (error) {
        
    }
    
});

module.exports = router;