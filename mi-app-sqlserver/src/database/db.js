const Sequelize = require('sequelize');

const DB_NAME = 'dbfact_node_sqlserver'; //nombre dela base de daros previamente creada
const DB_USER = 'sa'; // nombre del usuario en nuestro motor db,
const DB_PASS = '1234'; // contraseña

var sequelize = new Sequelize(
    DB_NAME,
    DB_USER, 
    DB_PASS,
{
    host:'DESKTOP-8KD3FTP',
    dialect:'mssql',
    port:1433
    }
);
sequelize.sync({ force: true })
 .then(function () {
    console.log(`Database & tables created!`);
  });
module.exports = {sequelize}
