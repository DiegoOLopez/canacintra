// Importamos los modelos
const { models } = require('../libs/sequelize.js');
const { recopilacion_de_sentencia } = require('./../services/validacion.service.js');


class PropuestaService {
    async find(){
        const propuestas = await models.PropuestaClase.findAll();
        return propuestas;
    }

    async create(propuesta){
        const resultado = await recopilacion_de_sentencia(propuesta);

        // Usar split para dividir el texto en dos partes
        const partes = resultado.split(',');
        
        // Asignar a las variables
        const estado = partes[0].trim(); // Texto antes de la coma
        const observacion = partes[1].trim(); // Texto después de la coma

        propuesta.estado = estado;
        propuesta.observacion = observacion;
        const propuestaCreated = await models.PropuestaClase.create(propuesta);
        const texto = "Tu solicitud ha sido " + estado + " debido a que " + observacion;

        return texto;
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