// Importamos los modelos
const { models } = require('../libs/sequelize.js');

class InversionService {
    async find(){
        const inversiones = await models.InversionClase.findAll();
        return inversiones;
    }

    async create(inversion){
        const inversionCreated = await models.InversionClase.create(inversion);
        return inversionCreated;
    }

    async findById(id){
        const inversion = await models.InversionClase.findByPk(id);
        return inversion;
    }

    async updateById(id, inversion){
        const inversionUpdated = await models.InversionClase.update(inversion, {
            where: { id_inversion: id }
        });
        return inversionUpdated;
    }

    async deleteById(id){
        return await models.InversionClase.destroy({
            where: { id_inversion: id }
        });
    }

}

module.exports = InversionService;