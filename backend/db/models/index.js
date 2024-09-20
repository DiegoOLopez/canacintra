const { InversionClase, inversionSchema } = require('./inversion.model');   
const { OportunidadClase, oportunidadSchema } = require('./oportunidad.model');
const { PagoEmprendedorClase, pagoEmprendedorSchema } = require('./pago_emprendedor.model');
const { PagoInversionistaClase, pagoInversionistaSchema } = require('./pago_inversionista.model');
const { UsuarioClase, usuarioSchema } = require('./usuario.model');
const { PropuestaClase, propuestaSchema } = require('./propuesta.model');

function setupModels(sequelize){
    InversionClase.init(inversionSchema, InversionClase.config(sequelize));
    OportunidadClase.init(oportunidadSchema, OportunidadClase.config(sequelize));
    PagoEmprendedorClase.init(pagoEmprendedorSchema, PagoEmprendedorClase.config(sequelize));
    PagoInversionistaClase.init(pagoInversionistaSchema, PagoInversionistaClase.config(sequelize));
    UsuarioClase.init(usuarioSchema, UsuarioClase.config(sequelize));
    PropuestaClase.init(propuestaSchema, PropuestaClase.config(sequelize));
}

module.exports = setupModels;