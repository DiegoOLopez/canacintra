/**
 * AQUI SE AGREGAN TODAS LAS RUTAS DENTRO DE routerApi, exportamos la ruta y la agregamos a la funcion
 */

const express = require('express');
// Definicion de ruta

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  // Agregacion de ruta
  //router.use('/modulo', moduloRouter);
}

module.exports = routerApi;