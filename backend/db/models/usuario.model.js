const { DataTypes, Model } = require('sequelize');

const USUARIO_VARIABLE = 'usuario_table';

// Definimos el esquema de la tabla
const usuarioSchema = {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido_p:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido_m:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado_token:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    verificado:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    n_cuenta:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}

class UsuarioClase extends Model{
    static associate(models){
        // Relación de uno a muchos con Propuesta y Inversion
        this.hasMany(models.PropuestaClase, {
            foreignKey: 'id_usuario',
            as: 'propuestas'
        });
        this.hasMany(models.InversionClase, {
            foreignKey: 'id_usuario',
            as: 'inversiones'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USUARIO_VARIABLE,
            modelName: 'UsuarioClase',
            timestamps: false
        }
    }
}

module.exports = { USUARIO_VARIABLE, usuarioSchema, UsuarioClase };
