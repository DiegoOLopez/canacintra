const joi = require('joi');

// Definir el tipo de variables
const id_inversion = joi.number().integer();
const id_usuario = joi.number().integer();
const id_oportunidad = joi.number().integer();
const monto_invertido = joi.number().integer();

// Definir el esquema de validación de creación
const creacionInversionSchema = joi.object({
    id_usuario: id_usuario.required(),
    id_oportunidad: id_oportunidad.required(),
    monto_invertido: monto_invertido.required()
});

// Definir el esquema de validación de actualización
const actualizacionInversionSchema = joi.object({
    id_usuario: id_usuario,
    id_oportunidad: id_oportunidad,
    monto_invertido: monto_invertido
});

// Definir el esquema de validación de búsqueda
const busquedaInversionSchema = joi.object({
    id_inversion: id_inversion.required()
});

module.exports = { creacionInversionSchema, actualizacionInversionSchema, busquedaInversionSchema };