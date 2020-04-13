const TypeProduct = require('../models/TypeProduct');
async function getTypeProducts(req, res) {
    try {
        const typeProducts = await TypeProduct.findAll({
        });
        res.json({
            data: typeProducts
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
async function addTypeProducts(req, res) {
    try {
        const typeproduct = await TypeProduct.create(req.body); //dinamico

        res.status(201).send({message:'Tipo producto creado de forma satisfactoria'});
    } catch (e) {
            if (e.name === 'SequelizeValidationError') {
            return res.status(400).send({ error: 'El dato que ingresó no es valido' })
        }
        res.status(500).send(e);
    }
};

//Actualizar tipo producto
async function updateTypeProducts(req, res) {
    try {
        //buacar tipo usuario
        const typeproduct = await TypeProduct.findByPk(req.params.id);

        //validar si existe
        if (!typeproduct) {
            return res.status(404).send('El tipo producto que intenta altualizar no existe');
        }
        //actualizar producto
        await TypeProduct.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send({message:'El tipo producto ha sido modificado'});

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};

//Delete
async function deleteTypeProducts(req, res){
    try {

        const typeproduct = await TypeProduct.findByPk(req.params.id);
        if (!typeproduct) {
            return res.status(404).send({ error: 'El tipo producto que desea eliminar no existe' });
        }
        await TypeProduct.destroy({
            where: {
                id: typeproduct.id
            }
        })
        res.send({ message: 'Tipo Producto Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};



module.exports = {getTypeProducts, addTypeProducts, updateTypeProducts, deleteTypeProducts};
