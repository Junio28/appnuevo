const SaleProduct = require('../models/SaleProduct');
async function getSaleProducts(req, res) {
    try {
        const saleproducts = await SaleProduct.findAll({
        });
        res.json({
            data: saleproducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

//Create 
async function addSaleProducts(req, res) {
    try {
        const saleproduct = await SaleProduct.create(req.body); //dinamico

        res.status(201).send({message:'Producto venta creado de forma satisfactoria'});
    } catch (e) {
        if (e.name === 'SequelizeValidationError') {
            return res.status(400).send({ error: 'El dato que ingresó no es valido' })
        }
        else if (e.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(400).send({ error: 'El dato que intenta ingresar en userId y/o clientId no existe, o está nulo' })
        }
        else if (e.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'El valor que deseas ingresar ya existe' })
        }
        res.status(500).send(e);
    }
};

//Actualizar producto-venta
async function updateSaleProducts(req, res) {
    try {
        //buacar producto-venta
        const saleproduct = await SaleProduct.findByPk(req.params.id);

        //validar si existe
        if (!saleproduct) {
            return res.status(404).send('El producto-venta que intenta altualizar no existe');
        }
        //actualizar producto-venta
        await SaleProduct.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send({message:'El Producto-Venta ha sido modificado'});

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};

//Eliminar producto-venta
async function deleteSaleProducts(req, res){
    try {

        const saleproduct = await SaleProduct.findByPk(req.params.id);
        if (!saleproduct) {
            return res.status(404).send({ error: 'El producto-venta que desea eliminar no existe' });
        }
        await SaleProduct.destroy({
            where: {
                id: saleproduct.id
            }
        })
        res.send({ message: 'Producto-venta Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};

module.exports = {getSaleProducts, addSaleProducts, updateSaleProducts,deleteSaleProducts}
