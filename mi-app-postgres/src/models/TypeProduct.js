const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const TypeProduct = sequelize.define('type_product', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [3, 70] // definir un minimo y un maximo
    }
  
  }
}, {
  timestamps: false
});

module.exports = TypeProduct
