const joi = require('joi');

// Definir el tipo de variables
const id_propuesta = joi.number().integer();
const id_usuario = joi.number().integer();
const fecha = joi.date();
const ubicacion = joi.string();
const sector = joi.string();
const tiempo_de_operacion = joi.string();
const descripcion = joi.string();
const problema_resolver = joi.string();
const monto_solicitado = joi.number().integer();
const plazo_seleccionado = joi.string();
const porcentaje_financiera = joi.number().integer();
const porcentaje_inversionista = joi.number().integer();
const cronograma = joi.string();
const capacidad_pago = joi.string();
const clientes = joi.string();
const estado = joi.string();
const observacion = joi.string();

// Definir el esquema de validación de creación
const creacionPropuestaSchema = joi.object({
    id_usuario: id_usuario.required(),
    fecha: fecha.required(),
    ubicacion: ubicacion.required(),
    sector: sector.required(),
    tiempo_de_operacion: tiempo_de_operacion.required(),
    descripcion: descripcion.required(),
    problema_resolver: problema_resolver.required(),
    monto_solicitado: monto_solicitado.required(),
    plazo_seleccionado: plazo_seleccionado.required(),
    porcentaje_financiera: porcentaje_financiera.required(),
    porcentaje_inversionista: porcentaje_inversionista.required(),
    cronograma: cronograma.required(),
    capacidad_pago: capacidad_pago.required(),
    clientes: clientes.required(),
    estado: estado.required(),
    observacion: observacion.required()
});

// Definir el esquema de validación de actualización
const actualizacionPropuestaSchema = joi.object({
    id_usuario: id_usuario,
    fecha: fecha,
    ubicacion: ubicacion,
    sector: sector,
    tiempo_de_operacion: tiempo_de_operacion,
    descripcion: descripcion,
    problema_resolver: problema_resolver,
    monto_solicitado: monto_solicitado,
    plazo_seleccionado: plazo_seleccionado,
    porcentaje_financiera: porcentaje_financiera,
    porcentaje_inversionista: porcentaje_inversionista,
    cronograma: cronograma,
    capacidad_pago: capacidad_pago,
    clientes: clientes,
    estado: estado,
    observacion: observacion
});

// Definir el esquema de validación de búsqueda
const busquedaPropuestaSchema = joi.object({
    id_propuesta: id_propuesta.required()
});

module.exports = { creacionPropuestaSchema, actualizacionPropuestaSchema, busquedaPropuestaSchema };