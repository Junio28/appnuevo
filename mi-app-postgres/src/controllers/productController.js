const Product = require('../models/Product');
async function getProducts(req, res) {
    try {
        const products = await Product.findAll({
        });
        res.json({
            data: products
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
async function addProducts(req, res) {
    try {
        const product = await Product.create(req.body); //dinamico

        res.status(201).send({message:'Producto creado de forma satisfactoria'});
    } catch (e) {
        if (e.name === 'SequelizeValidationError') {
            return res.status(400).send({ error: 'El dato que ingresó no es valido' })
        }
        else if (e.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(400).send({ error: 'El dato que intenta ingresar en typeProductId no existe, o está nulo' })
        }
        res.status(500).send(e);
    }
};

//Actualizar producto
async function updateProducts(req, res) {
    try {
        //buacar usuario
        const product = await Product.findByPk(req.params.id);

        //validar si existe
        if (!product) {
            return res.status(404).send('El producto que intenta altualizar no existe');
        }
        //actualizar producto
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send({message:'El producto ha sido modificado'});

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};

//Delete
async function deleteProducts(req, res){
    try {

        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send({ error: 'El producto que desea eliminar no existe' });
        }
        await Product.destroy({
            where: {
                id: product.id
            }
        })
        res.send({ message: 'Producto Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};

module.exports = {getProducts, addProducts, updateProducts, deleteProducts};
