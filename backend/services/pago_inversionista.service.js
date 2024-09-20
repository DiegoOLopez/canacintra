// Importamos los modelos
const { models } = require('../libs/sequelize.js');

class PagoInversionistaService {
    async find(){
        const pagos = await models.PagoInversionistaClase.findAll();
        return pagos;
    }

    async create(pago){
        const pagoCreated = await models.PagoInversionistaClase.create(pago);
        return pagoCreated;
    }

    async findById(id){
        const pago = await models.PagoInversionistaClase.findByPk(id);
        return pago;
    }

    async updateById(id, pago){
        const pagoUpdated = await models.PagoInversionistaClase.update(pago, {
            where: { id_pago_inversionista: id }
        });
        return pagoUpdated;
    }

    async deleteById(id){
        return await models.PagoInversionistaClase.destroy({
            where: { id_pago_inversionista: id }
        });
    }

}

module.exports = PagoInversionistaService;