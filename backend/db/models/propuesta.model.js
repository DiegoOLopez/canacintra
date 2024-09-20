const { DataTypes, Model } = require('sequelize');

const PROPUESTA_VARIABLE = 'propuesta_table';

// Definimos el esquema de la tabla
const propuestaSchema = {

    id_propuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    archivo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}