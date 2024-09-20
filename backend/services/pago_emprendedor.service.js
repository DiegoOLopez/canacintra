// Importamos los modelos
const { models } = require('../libs/sequelize.js');

class PagoEmprendedorService {
    async find(){
        const pagos = await models.PagoEmprendedorClase.findAll();
        return pagos;
    }

    async create(pago){
        const pagoCreated = await models.PagoEmprendedorClase.create(pago);
        return pagoCreated;
    }

    async findById(id){
        const pago = await models.PagoEmprendedorClase.findByPk(id);
        return pago;
    }

    async updateById(id, pago){
        const pagoUpdated = await models.PagoEmprendedorClase.update(pago, {
            where: { id_pago_emprendedor: id }
        });
        return pagoUpdated;
    }

    async deleteById(id){
        return await models.PagoEmprendedorClase.destroy({
            where: { id_pago_emprendedor: id }
        });
    }

}

module.exports = PagoEmprendedorService;