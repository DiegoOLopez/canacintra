const { DataTypes, Model } = require('sequelize');

const { INVERSION_VARIABLE } = require('./inversion.model');

const PAGO_INVERSIONISTA_VARIABLE = 'pago_inversionista_table';

// Definimos el esquema de la tabla
const pagoInversionistaSchema = {

    id_pago_inversionista:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_inversion:{
        field: 'id_inversion',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: INVERSION_VARIABLE,
            key: 'id_inversion'
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
    fecha_pago:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    pago_bruto:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    iva:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isr:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false
    }
}

class PagoInversionistaClase extends Model{
    static associate(models){
        // Relacion de inversion a pago inversionista
        this.belongsTo(models.InversionClase, {
            as: 'inversion_table',
            foreignKey: 'id_inversion'
        });

    }

    static config(sequelize){
        return {
            sequelize,
            modelName: 'PagoInversionistaClase',
            tableName: PAGO_INVERSIONISTA_VARIABLE,
            timestamps: false
        }
    }
}

module.exports = { PAGO_INVERSIONISTA_VARIABLE, pagoInversionistaSchema, PagoInversionistaClase };