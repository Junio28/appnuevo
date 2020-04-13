var app = require('./config/index')

// servidor
var port = process.env.PORT || 8000;
async function server(){
    await app.listen(port);
   console.log('servidor en el puerto', port);
}

server();

//exportacion de modulos
module.exports = app
