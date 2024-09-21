const express = require('express');
const { recopilacion_de_sentencia } = require('./../services/riesgo.service'); // Cambiado a riesgo.service

const router = express.Router();

// Ruta para manejar la solicitud
router.post('/', async (req, res) => {
  const { sentencia } = req.body; // Obtener la sentencia del body

  try {
    const resultado = await recopilacion_de_sentencia(sentencia); // Llamar al servicio
    res.status(200).json({ resultado }); // Enviar la respuesta al front-end
  } catch (error) {
    console.error('Error al procesar la sentencia:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
});
