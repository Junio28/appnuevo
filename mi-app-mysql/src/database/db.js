const Sequelize = require('sequelize');

const DB_NAME = 'dbfact_node_mysql'; //nombre dela base de daros previamente creada
const DB_USER = 'juniorm'; // nombre del usuario en nuestro motor db,
const DB_PASS = '123456'; // contraseña

var sequelize = new Sequelize(
    DB_NAME,
    DB_USER, 
    DB_PASS,
{
    host:'localhost',
    dialect:'mysql',
    port: 3306
    }
);

sequelize.sync({ force: true })
 .then(function () {
    console.log(`Database & tables created!`);
  });
module.exports = {sequelize}
