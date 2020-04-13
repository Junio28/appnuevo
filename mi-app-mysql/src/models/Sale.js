const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const Product = require('./Product')
const SaleProduct = require('./SaleProduct')
const User = require('./User')
const Client = require('./Client')
const Sale = sequelize.define('sale', {

  date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,  // solo permite cadenas de fecha
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  subtotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
    unique: true,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  created: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  },
  updated: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true, // comprueba números de coma flotante válidos
      notEmpty: true, // que no este vacio
      //len: [2, 70] // definir un minimo y un maximo
    }
  }
}, {
  timestamps: false
});


Sale.belongsToMany(Product, { through:SaleProduct  });
Product.belongsToMany(Sale, { through:SaleProduct  });

User.hasMany(Sale, { foreinkey: 'saleId', sourceKey: 'id' });
Sale.belongsTo(User, { foreinkey: 'userId', targetId: 'id' });

Client.hasMany(Sale, { foreinkey: 'saleId', sourceKey: 'id' });
Sale.belongsTo(Client, { foreinkey: 'clientId', targetId: 'id' });

module.exports = Sale
