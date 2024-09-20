// Importamos los modelos
const { models } = require('../libs/sequelize.js');

class OportunidadService {
    async find(){
        const oportunidades = await models.OportunidadClase.findAll();
        return oportunidades;
    }

    async create(oportunidad){
        const oportunidadCreated = await models.OportunidadClase.create(oportunidad);
        return oportunidadCreated;
    }

    async findById(id){
        const oportunidad = await models.OportunidadClase.findByPk(id);
        return oportunidad;
    }

    async updateById(id, oportunidad){
        const oportunidadUpdated = await models.OportunidadClase.update(oportunidad, {
            where: { id_oportunidad: id }
        });
        return oportunidadUpdated;
    }

    async deleteById(id){
        return await models.OportunidadClase.destroy({
            where: { id_oportunidad: id }
        });
    }

}

module.exports = OportunidadService;