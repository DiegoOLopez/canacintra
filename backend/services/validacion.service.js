const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require('../config/config');

// Inicializar la IA con el modelo
const genAI = new GoogleGenerativeAI(config.api_key);

async function recopilacion_de_sentencia(sentencia) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Con base en la siguiente propuesta de crédito, evalúa si el crédito es viable para ser aceptado o debe ser rechazado. Si lo rechazas, proporciona una justificación clara. 
  Regresa la información en el siguiente formato:
  - 'estado': aceptado o rechazado
  - 'observacion': motivo del rechazo o feedback al solicitante.
  
  Aquí está la información de la propuesta:
  - ID de la propuesta: ${sentencia.id_propuesta}
  - ID del usuario: ${sentencia.id_usuario}
  - Ubicación (considerar vulnerabilidad): ${sentencia.ubicacion}
  - Sector: ${sentencia.sector}
  - Tiempo de operación: ${sentencia.tiempo_de_operacion} meses
  - Descripción del crédito: ${sentencia.descripcion}
  - Problema a resolver: ${sentencia.problema_resolver}
  - Monto solicitado: ${sentencia.monto_solicitado}
  - Plazo solicitado: ${sentencia.plazo_seleccionado} meses
  - Porcentaje solicitado a la financiera: ${sentencia.porcentaje_financiera}%
  - Porcentaje solicitado para crowdfunding: ${sentencia.porcentaje_inversionista}%
  - Capacidad de pago: ${sentencia.capacidad_pago}
  - Descripción de los clientes: ${sentencia.clientes}
  
  NOTA: Somos una empresa mexicana dedicada a impulsar pequeños negocios.`;
  
  
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
