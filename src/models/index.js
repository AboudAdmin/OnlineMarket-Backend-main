const config = require("../config/config");
const mysql = require("mysql2");
const Sequelize = require("sequelize");

module.exports = db = {};

const { host, port, user, password, database } = config.database;
const pool = mysql.createPool({ host, port, user, password });
pool.query(`CREATE DATABASE IF NOT EXIST ${database}`);

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

db.sequelize = sequelize;

const User = require("./user.js");
const Category = require("./category.js");
const Produit = require("./product.js");
const Photo = require("./photos.js");
const Contact = require("./contact.js");
const Reviews = require("./reviews.js");
const OrderItems = require("./OrderItems.js");

Category.hasMany(Produit);
Produit.belongsTo(Category);

Produit.hasMany(Photo);
Photo.belongsTo(Produit);

Contact.hasMany(User);
User.hasMany(Contact);

User.hasMany(Reviews);
Reviews.belongsTo(User);

Produit.hasMany(Reviews);
Reviews.belongsTo(Produit);

OrderItems.hasMany(product, order);
(product, order).belongsTo(OrderItems);

sequelize.sync({ force: false });
