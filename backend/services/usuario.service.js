// Importamos los modelos
const { models } = require ('../libs/sequelize.js');

class UsuarioService {
    async find(){
        const usuarios = await models.UsuarioClase.findAll();
        return usuarios;
    }

    async create(usuario){
        const usuarioCreated = await models.UsuarioClase.create(usuario);
        return usuarioCreated;
    }

    async findById(id){
        const usuario = await models.UsuarioClase.findByPk(id);
        return usuario;
    }

    async updateById(id, usuario){
        const usuarioUpdated = await models.UsuarioClase.update(usuario, {
            where: { id_usuario: id }
        });
        return usuarioUpdated;
    }

    async deleteById(id){
        return await models.UsuarioClase.destroy({
            where: { id_usuario: id }
        });
    }
}

module.exports = UsuarioService;