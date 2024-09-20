// Importamos la deteccion de errores

// Importamos los modelos
const { models } = require ('../libs/sequelize.js');

class UsuarioService {
    async find(){
        const usuarios = await models.UsuarioClase.findAll();
        return usuarios;
    }
}

module.exports = UsuarioService;