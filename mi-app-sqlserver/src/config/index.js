//archivos requeridos
var express = require('express');
var morgan = require('morgan');

//instancias
const app =express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))	

var UserRoutes = require('../routes/users')
var ClientRoutes = require('../routes/clients')
var ProductRoutes = require('../routes/products')
var TypeProductRoutes = require('../routes/typeProducts')
var SaleRoutes = require('../routes/sales')
var SaleProductRoutes = require('../routes/saleProduct')

app.use(UserRoutes)
app.use(ClientRoutes)
app.use(TypeProductRoutes)
app.use(ProductRoutes)
app.use(SaleRoutes)
app.use(SaleProductRoutes)

//exportacion de modulos
module.exports = app
