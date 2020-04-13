const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const User = sequelize.define('user', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [2, 70] // definir un minimo y un maximo
    }
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z\sñÑ]+$/i, //validamos q tipo de caracteres puede tener
      notEmpty: true, // que no este vacio
      len: [2, 70] // definir un minimo y un maximo
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true,
      notEmpty: true,
      len: [3, 50]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [5, 16]
    }
  }
}, {
  timestamps: false
});

module.exports = User
