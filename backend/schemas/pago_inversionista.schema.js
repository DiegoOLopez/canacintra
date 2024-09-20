const joi = require('joi');

// Definir el tipo de variables
const id_pago_inversionista = joi.number().integer();
const id_inversion = joi.number().integer();
const concepto = joi.string();
const numero_de_pago = joi.number().integer();
const fecha_pago = joi.date();
const pago_bruto = joi.number().integer();
const iva = joi.number().integer();
const isr = joi.number().integer();
const estado = joi.string();

// Definir el esquema de validación de creación
const creacionPagoInversionistaSchema = joi.object({
    id_inversion: id_inversion.required(),
    concepto: concepto.required(),
    numero_de_pago: numero_de_pago.required(),
    fecha_pago: fecha_pago.required(),
    pago_bruto: pago_bruto.required(),
    iva: iva.required(),
    isr: isr.required(),
    estado: estado.required()
});

// Definir el esquema de validación de actualización
const actualizacionPagoInversionistaSchema = joi.object({
    id_inversion: id_inversion,
    concepto: concepto,
    numero_de_pago: numero_de_pago,
    fecha_pago: fecha_pago,
    pago_bruto: pago_bruto,
    iva: iva,
    isr: isr,
    estado: estado
});

// Definir el esquema de validación de búsqueda
const busquedaPagoInversionistaSchema = joi.object({
    id_pago_inversionista: id_pago_inversionista.required()
});

module.exports = { creacionPagoInversionistaSchema, actualizacionPagoInversionistaSchema, busquedaPagoInversionistaSchema };