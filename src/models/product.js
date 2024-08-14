const {Sequelize, DataType} = require("sequelize");
const db = require('../index.js')
const sequelize = db.Sequelize;
const product = sequelize.define('Product',{
    id:{
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    price:{
        type: DataTypes.FLOAT,
        validate:{
            min:0
        }
    },
    quantity:{
        type: DataTypes.INTEGER,
        validate:{
            min:0
        }
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    marque:{
        type: DataTypes.STRING,
    },
    statut: {
        type: DataTypes.ENUM(["publie","prive"]),
        allowNull: false,
    }
});
module.export = product;