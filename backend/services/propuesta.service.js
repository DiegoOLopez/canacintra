// Importamos los modelos
const { models } = require('../libs/sequelize.js');

class PropuestaService {
    async find(){
        const propuestas = await models.PropuestaClase.findAll();
        return propuestas;
    }

    async create(propuesta){
        const propuestaCreated = await models.PropuestaClase.create(propuesta);
        return propuestaCreated;
    }

    async findById(id){
        const propuesta = await models.PropuestaClase.findByPk(id);
        return propuesta;
    }

    async updateById(id, propuesta){
        const propuestaUpdated = await models.PropuestaClase.update(propuesta, {
            where: { id_propuesta: id }
        });
        return propuestaUpdated;
    }

    async deleteById(id){
        return await models.PropuestaClase.destroy({
            where: { id_propuesta: id }
        });
    }
}

module.exports = PropuestaService;