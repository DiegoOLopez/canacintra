const express = require('express');
const { recopilacion_de_sentencia } = require('./../services/validacion.service'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

// Middleware para recibir datos en formato JSON
app.use(express.json());

// Ruta para manejar la solicitud
app.post('/', async (req, res) => {
  const { sentencia } = req.body; // Obtener la sentencia del body

  try {
    const resultado = await recopilacion_de_sentencia(sentencia); // Llamar al servicio
    res.status(200).json({ resultado }); // Enviar la respuesta al front-end
  } catch (error) {
    console.error('Error al procesar la sentencia:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
