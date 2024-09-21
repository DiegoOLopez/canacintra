// Importamos los modelos
const { models } = require ('../libs/sequelize.js');
const bcrypt = require('bcrypt')


class UsuarioService {
    async find(){
        const usuarios = await models.UsuarioClase.findAll();
        return usuarios;
    }

    async create(usuario){
        const hash = await bcrypt.hash(usuario.contrasena , 10);    
        const usuarioCreated = await models.UsuarioClase.create({
            ...usuario,
            contrasena: hash
        });
        delete usuarioCreated.dataValues.contrasena;
        return usuarioCreated;
    }

    async findById(id){
        const usuario = await models.UsuarioClase.findByPk(id);
        return usuario;
    }

    async findByEmail(email){
        const usuario = await models.UsuarioClase.findOne({
            where: { correo: email }
        });
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