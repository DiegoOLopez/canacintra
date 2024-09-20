const joi = require('joi');

// Definir el tipo de variables
const id_usuario = joi.number().integer();
const nombre = joi.string();
const apellido_p = joi.string();
const apellido_m = joi.string();
const correo = joi.string();
const contrasena = joi.string();
const tipo = joi.string();
const token = joi.string();
const estado_token = joi.boolean();
const verificado = joi.boolean();
const n_cuenta = joi.number().integer();

// Definir el esquema de validación de creación
const creacionUsuarioSchema = joi.object({
    nombre: nombre.required(),
    apellido_p: apellido_p.required(),
    apellido_m: apellido_m.required(),
    correo: correo.required(),
    contrasena: contrasena.required(),
    tipo: tipo.required(),
    token: token.required(),
    estado_token: estado_token.required(),
    verificado: verificado.required(),
    n_cuenta: n_cuenta.required()
});

// Definir el esquema de validación de actualización
const actualizacionUsuarioSchema = joi.object({
    nombre: nombre,
    apellido_p: apellido_p,
    apellido_m: apellido_m,
    correo: correo,
    contrasena: contrasena,
    tipo: tipo,
    token: token,
    estado_token: estado_token,
    verificado: verificado,
    n_cuenta: n_cuenta
});

// Definir el esquema de validación de búsqueda
const busquedaUsuarioSchema = joi.object({
    id_usuario: id_usuario.required()
});

module.exports = { creacionUsuarioSchema, actualizacionUsuarioSchema, busquedaUsuarioSchema };
