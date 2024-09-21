const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require('../config/config');

// Inicializar la IA con el modelo
const genAI = new GoogleGenerativeAI(config.api_key);

async function recopilacion_de_sentencia(sentencia) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Dame un saludo bonito"
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

module.exports = { recopilacion_de_sentencia };