const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const SaleProduct = sequelize.define('saleproduct', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date_sale: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,  // solo permite cadenas de fecha
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  quantity: {
    type: Sequelize.FLOAT,
    allowNull: false,
    unique: true,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  }
}, {
  timestamps: false
});

module.exports = SaleProduct
