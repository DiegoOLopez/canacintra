const { DataTypes, Model } = require('sequelize');
const { USUARIO_VARIABLE } = require('./usuario.model');

const PROPUESTA_VARIABLE = 'propuesta_table';

// Definimos el esquema de la tabla
const propuestaSchema = {
    id_propuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USUARIO_VARIABLE,
            key: 'id_usuario'
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sector:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tiempo_de_operacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    problema_resolver:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto_solicitado:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    plazo_seleccionado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    porcentaje_financiera:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    porcentaje_inversionista:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cronograma:{
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidad_pago:{
        type: DataTypes.STRING,
        allowNull: false
    },
    clientes:{
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    observacion: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}

class PropuestaClase extends Model{
    static associate(models){
        this.belongsTo(models.UsuarioClase, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROPUESTA_VARIABLE,
            modelName: 'PropuestaClase',
            timestamps: false
        }
    }
}

module.exports = { PROPUESTA_VARIABLE, propuestaSchema, PropuestaClase };
