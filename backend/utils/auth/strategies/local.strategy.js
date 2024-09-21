const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt'); // Importa bcrypt
const boom = require('@hapi/boom');
const UserService = require('./../../../services/usuario.service'); // Ajusta el path si es necesario

const service = new UserService();

// Definimos la estrategia local
const LocalStrategy = new Strategy({
    usernameField: 'correo', // Define el campo de email
    passwordField: 'contrasena', // Define el campo de contraseña
},
    async (username, password, done) => {
  try {
    const usuario = await service.findByEmail(username); // Busca el usuario por email
    if (!usuario) {
      return done(boom.unauthorized('Usuario no encontrado'), false);
    }
    
    const isMatch = await bcrypt.compare(password, usuario.contrasena); // Compara las contraseñas
    if (!isMatch) {
      return done(boom.unauthorized('Contraseña incorrecta'), false);
    }
    delete usuario.dataValues.contrasena; // Elimina la contraseña del objeto usuario

    // Si todo es correcto, retorna el usuario
    return done(null, usuario);
  } catch (error) {
    return done(error, false); // En caso de error
  }
});

module.exports = LocalStrategy;
