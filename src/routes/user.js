//const verifyToken = require('./validate_token');
const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/user");

//Nuevo usuario
router.post("/user", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los usuarios
router.get("/user", (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un usuario por su id
router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un usuario por su id
router.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, correo, clave, nombre, telefono, direccion, ciudad, preferencias_de_viaje, rol } = req.body;
    userSchema
        .updateOne({ _id: id }, {
            $set: { usuario, correo, clave, nombre, telefono, direccion, ciudad, preferencias_de_viaje, rol }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un estudiante por su id
router.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
