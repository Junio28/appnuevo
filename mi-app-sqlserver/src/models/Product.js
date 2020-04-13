const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const TypeProduct = require('./TypeProduct')
const Product = sequelize.define('product', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [2, 70] // definir un minimo y un maximo
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,   // Busca enteros válidos
      notEmpty: true, // que no este vacio
      //len: [0, 70] // definir un minimo y un maximo
    }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
     // len: [2, 70] // definir un minimo y un maximo
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [2, 500] // definir un minimo y un maximo
    }
  },
  mark: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [2, 70] // definir un minimo y un maximo
    }
  }
}, 
{
  timestamps: true
});

TypeProduct.hasMany(Product, { foreinkey: 'productId', sourceKey: 'id' });
Product.belongsTo(TypeProduct, { foreinkey: 'typeProductId', targetId: 'id' });

module.exports = Product
