const { DataTypes, Model } = require('sequelize');
const { OPORTUNIDAD_VARIABLE } = require('./oportunidad.model');
const { USUARIO_VARIABLE } = require('./usuario.model');

const INVERSION_VARIABLE = 'inversion_table';
// Definimos el esquema de la tabla

const inversionSchema = {
    id_inversion:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario:{
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USUARIO_VARIABLE,
            key: 'id_usuario'
        }
    },
    id_oportunidad: {
        field: 'id_oportunidad',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: OPORTUNIDAD_VARIABLE,
            key: 'id_oportunidad'
        }
    },
    monto_invertido:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class InversionClase extends Model{
    static associate(models){
        this.belongsTo(models.UsuarioClase, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
        this.belongsTo(models.OportunidadClase,{
            foreignKey: 'id_oportunidad',
            as: 'oportunidad'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: INVERSION_VARIABLE,
            modelName: 'InversionClase',
            timestamps: false
        }
    }
}

module.exports = { INVERSION_VARIABLE, inversionSchema, InversionClase }
