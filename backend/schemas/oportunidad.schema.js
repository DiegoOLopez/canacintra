const joi = require('joi');

// Definir el tipo de variables
const id_oportunidad = joi.number().integer();
const id_propuesta = joi.number().integer();
const monto = joi.number().integer();
const fecha_inicio = joi.date();
const pago_mensual = joi.number().integer();

// Definir el esquema de validación de creación
const creacionOportunidadSchema = joi.object({
    id_propuesta: id_propuesta.required(),
    monto: monto.required(),
    fecha_inicio: fecha_inicio.required(),
    pago_mensual: pago_mensual.required()
});

// Definir el esquema de validación de actualización
const actualizacionOportunidadSchema = joi.object({
    id_propuesta: id_propuesta,
    monto: monto,
    fecha_inicio: fecha_inicio,
    pago_mensual: pago_mensual
});

// Definir el esquema de validación de búsqueda
const busquedaOportunidadSchema = joi.object({
    id_oportunidad: id_oportunidad.required()
});

module.exports = { creacionOportunidadSchema, actualizacionOportunidadSchema, busquedaOportunidadSchema };