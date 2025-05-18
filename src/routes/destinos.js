//const verifyToken = require('./validate_token');
const express = require("express");
const router = express.Router(); //manejador de rutas de express
const destinosSchema = require("../models/destinos");

//Nuevo destino
router.post("/destinos", (req, res) => {
    const destinos = destinosSchema(req.body);
    destinos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los destinos
router.get("/destinos", (req, res) => {
    destinosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un destino por su id
router.get("/destinos/:id", (req, res) => {
    const { id } = req.params;
    destinosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un destino por su id
router.put("/destinos/:id", (req, res) => {
    const { id } = req.params;
    const { pais, ciudad, fecha_inicio, fecha_final, precio, descripcion, duracion, imagen1, imagen2, imagen3, imagen4 } = req.body;
    destinosSchema
        .updateOne({ _id: id }, {
            $set: { pais, ciudad, fecha_inicio, fecha_final, precio, descripcion, duracion, imagen1, imagen2, imagen3, imagen4 }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un destino por su id
router.delete("/destinos/:id", (req, res) => {
    const { id } = req.params;
    destinosSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;