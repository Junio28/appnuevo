const User = require('../models/user');
async function getUsers(req, res) {
    try {
        const users = await User.findAll({
        });
        res.json({
            data: users
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
async function addUsers(req, res) {
    try {
        const user = await User.create(req.body); //dinamico

        res.status(201).send({message:'Usuario creado de forma satisfactoria'});
    } catch (e) {
        if (e.name === 'SequelizeValidationError') {
            return res.status(400).send({ error: 'El dato que ingresó no es valido' })
        }
        else if (e.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'El email que deseas ingresar ya existe' })
        }
        res.status(500).send(e);
    }
};



//Actualizar usuarios
async function updateUsers(req, res) {
    try {
        //buacar usuario
        const user = await User.findByPk(req.params.id);

        //validar si existe
        if (!user) {
            return res.status(404).send('El usuario que intenta altualizar no existe');
        }
        //actualizar usuario
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send({message:'El usuario ha sido modificado'});

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};

//Eliminar Usuario
async function deleteUsers(req, res){
    try {

        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'El usuario que desea eliminar no existe' });
        }
        await User.destroy({
            where: {
                id: user.id
            }
        })
        res.send({ message: 'Usuario Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};


module.exports = {getUsers, addUsers, updateUsers, deleteUsers};
