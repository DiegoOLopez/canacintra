const joi = require('joi');

// Definir el tipo de variables
const id_pago_emprendedor = joi.number().integer();
const id_oportunidad = joi.number().integer();
const concepto = joi.string();
const numero_de_pago = joi.number().integer();
const fecha_limite = joi.date();
const monto_a_pagar = joi.number().integer();

// Definir el esquema de validación de creación
const creacionPagoEmprendedorSchema = joi.object({
    id_oportunidad: id_oportunidad.required(),
    concepto: concepto.required(),
    numero_de_pago: numero_de_pago.required(),
    fecha_limite: fecha_limite.required(),
    monto_a_pagar: monto_a_pagar.required()
});

// Definir el esquema de validación de actualización
const actualizacionPagoEmprendedorSchema = joi.object({
    id_oportunidad: id_oportunidad,
    concepto: concepto,
    numero_de_pago: numero_de_pago,
    fecha_limite: fecha_limite,
    monto_a_pagar: monto_a_pagar
});

// Definir el esquema de validación de búsqueda
const busquedaPagoEmprendedorSchema = joi.object({
    id_pago_emprendedor: id_pago_emprendedor.required()
});

module.exports = { creacionPagoEmprendedorSchema, actualizacionPagoEmprendedorSchema, busquedaPagoEmprendedorSchema };