const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require('../config/config');

// Inicializar la IA con el modelo
const genAI = new GoogleGenerativeAI(config.api_key);

async function recopilacion_de_sentencia(sentencia) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "De la siguiente propuesta de credito identificaras si el credito es viable para ser aceptado o lo rechazaras dandome un texto de rechazo, es importante que me regreses la informacion en este formato: 'estado'=aceptado o rechazado, 'observacion'=aqui la observacion que sera el feed back al solicitante del prestamo, una vez entendido todo esto, te mando toda la propuesta de credito solicitada: " + sentencia.id_propuesta + ", con el id del usuario que la solicito: "
  + sentencia.id_usuario + " ubicacion (importante por la vulnerabilidad que pueda representar): " + sentencia.ubicacion + " que esta en el sector de: " + sentencia.sector + " con un tiempo de operacion de " + sentencia.tiempo_de_operacion + " da la siguiente descripcion para su credito: " + sentencia.descripcion + " buscando solucionar el problema que nos propuso el cual es: " + sentencia.problema_resolver + " buscando un monto de " + sentencia.monto_solicitado + " con un plazo pensado a " + sentencia.plazo_seleccionado + " meses buscando un porcentaje de financiamiento por parte de la financiera de " + sentencia.porcentaje_financiera + "% y para el modo de crowdfounding solicito un porcentaje del " + sentencia.porcentaje_inversionista + "%, buscando pagar de la siguiente manera " + sentencia.capacidad_pago + " nos dio la descripcion de sus clientes que es la siguiente " + sentencia.clientes  + " AQUI TERMINA LA INFORMACION PROPORCIONADA POR EL CLIENTE, como notas importante nosotros somos una empresa mexicana dedicada a impulsar los pequeños negocios" ;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const texto = response.text();
  
  // Eliminar los corchetes inicial y final
  const textoSinCorchetes = texto.slice(1, -1);

  // Dividir la cadena por comas
  const elementos = textoSinCorchetes.split(',');

  // Limpiar los elementos del array
  const array = elementos.map(elemento => elemento.trim().replace(/^['"]|['"\]]$/g, ''));

  return array;
}

module.exports = { recopilacion_de_sentencia };
