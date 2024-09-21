/**
 * AQUI SE AGREGAN TODAS LAS RUTAS DENTRO DE routerApi, exportamos la ruta y la agregamos a la funcion
 */
const express = require('express');
// Definicion de ruta
const inversionRouter = require('./inversion.router');
const oportunidadRouter = require('./oportunidad.router');
const pagoEmprendedorRouter = require('./pago_emprendedor.router');
const pagoInversionistaRouter = require('./pago_inversionista.router');
const propuestaRouter = require('./propuesta.router');
const usuarioRouter = require('./usuario.router');

const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);

  // Agregacion de ruta
  router.use('/inversion', inversionRouter);
  router.use('/oportunidad', oportunidadRouter);
  router.use('/pago-emprendedor', pagoEmprendedorRouter);
  router.use('/pago-inversionista', pagoInversionistaRouter);
  router.use('/propuesta', propuestaRouter);
  router.use('/usuario', usuarioRouter);
  router.use('/log', authRouter);
}

module.exports = routerApi;