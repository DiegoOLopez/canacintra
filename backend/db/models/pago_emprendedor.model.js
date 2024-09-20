const { DataTypes, Model } = require('sequelize');

const { OPORTUNIDAD_VARIABLE } = require('./oportunidad.model');

const PAGO_EMPRENDEDOR_VARIABLE = 'pago_emprendedor_table';

// Definimos el esquema de la tabla
const pagoEmprendedorSchema = {

    id_pago_emprendedor:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_oportunidad:{
        field: 'id_oportunidad',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: OPORTUNIDAD_VARIABLE,
            key: 'id_oportunidad'
        }
    },
    concepto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_de_pago:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_limite:{
        type: DataTypes.DATE,
        allowNull: false
    },
    monto_a_pagar:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}

class PagoEmprendedorClase extends Model{
    static associate(models){
        // Relacion de uno a muchos
        this.belongsTo(models.OportunidadClase,{
            as: 'oportunidad_table',
            foreignKey: 'id_oportunidad'
        });

        this.hasMany(models.PagoEmprendedorClase, {
            as: 'pago_emprendedor_table',
            foreignKey: 'id_pago_emprendedor'
        });
        
    }
    
    static config(sequelize){
        return {
            sequelize,
            tableName: PAGO_EMPRENDEDOR_VARIABLE,
            modelName: 'PagoEmprendedorClase',
            timestamps: false
        }
    }
}

module.exports = { PAGO_EMPRENDEDOR_VARIABLE, pagoEmprendedorSchema, PagoEmprendedorClase };