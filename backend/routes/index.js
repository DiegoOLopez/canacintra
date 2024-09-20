/**
 * AQUI SE AGREGAN TODAS LAS RUTAS DENTRO DE routerApi, exportamos la ruta y la agregamos a la funcion
 */
const express = require('express');
// Definicion de ruta
const usuarioRouter = require('./usuario.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);

  // Agregacion de ruta
  router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;