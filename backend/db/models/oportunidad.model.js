const { DataTypes, Model } = require('sequelize');
const { PROPUESTA_VARIABLE } = require('./propuesta.model');

const OPORTUNIDAD_VARIABLE = 'oportunidad_table';

// Definimos el esquema de la tabla
const oportunidadSchema = {
    id_oportunidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_propuesta:{
        field: 'id_propuesta',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PROPUESTA_VARIABLE,
            key: 'id_propuesta'
        }
    },
    monto:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_inicio:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    pago_mensual:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class OportunidadClase extends Model{
    static associate(models){
        // Relacion de uno a muchos
        this.belongsTo(models.PropuestaClase,{
           as: 'propuesta_table',
              foreignKey: 'id_propuesta' 
        });
        this.hasMany(models.PagoEmprendedorClase, {
            as: 'pago_emprendedor',
            foreignKey: 'id_oportunidad'
        });
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName: OPORTUNIDAD_VARIABLE,
            modelName: 'OportunidadClase',
            timestamps: false
        }
    }
}

module.exports = { OPORTUNIDAD_VARIABLE, oportunidadSchema, OportunidadClase };