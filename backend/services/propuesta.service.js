// Importamos los modelos
const { models } = require('../libs/sequelize.js');
const { recopilacion_de_sentencia } = require('./../services/validacion.service.js');


class PropuestaService {
    async find(){
        const propuestas = await models.PropuestaClase.findAll();
        return propuestas;
    }

    async create(propuesta){
        const propuestaCreated = await models.PropuestaClase.create(propuesta);
        const resultado = await recopilacion_de_sentencia(propuestaCreated);

        // Suponiendo que el retorno tiene la forma { estado: 'aceptado', observacion: 'la retroalimentación aquí' }
        const { estado, observacion } = resultado;
      
        // Guarda las respuestas en variables
        const estadoEvaluacion = estado;
        const retroalimentacion = observacion;
      
        // Imprime o utiliza las variables como necesites
        console.log("Estado de la propuesta:", estadoEvaluacion);
        console.log("Retroalimentación:", retroalimentacion);
        return resultado;
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