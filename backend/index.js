// Importamos Express
const express = require('express');
// Mnadamos a llamar el Router
const routerAPI = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
// Instalado?
const cors = require('cors');
// Importar check
const { checkApiKey } = require('./middlewares/auth.handler');
// CONFIGURAR CORS
const whileList = ['http://localhost:8080', 'https://myapp.co', 'http://localhost:4200'];

// Configurar OPS DE CORS
const options = {
  origin: (origin, callback) => {
    if (whileList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}



// Inicializamos la API
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
// RUTA
app.get('/', checkApiKey, (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola mi server en express');
});

// Aplicacion de CORS
app.use(cors(options));

require('./utils/auth');

// ROUTER API
routerAPI(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// APP LISTEN
app.listen(port, () => {
  console.log('Mi port' +  port);
});
