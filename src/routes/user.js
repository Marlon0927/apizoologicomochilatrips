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
    const { nombre, apellido, tipo_doc, num_doc, codigo, correo, edad, carrera, semestre, jornada } = req.body;
    estudianteSchema
        .updateOne({ _id: id }, {
            $set: { nombre, apellido, tipo_doc, num_doc, codigo, correo, edad, carrera, semestre, jornada }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un estudiante por su id
router.delete("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    estudianteSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
