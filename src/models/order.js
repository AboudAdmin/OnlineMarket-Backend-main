const { Sequelize, DataType } = require("sequelize");
const db = require("../index.js");
const sequelize = db.Sequelize;

const order = sequelize.define("order", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userID: {
    type: DataType.INTEGER,
  },
  date: {
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status: {
    type: DataType.ENUM(["en attente", "payé", "envoyé", "reçu"]),
    allowNull: false,
  },
});

module.exports = order;
