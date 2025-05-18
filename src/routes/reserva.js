const express = require("express");
const router = express.Router();
const Reserva = require("../models/reserva");

// Crear una nueva reserva
router.post("/reserva", async (req, res) => {
    try {
        const nuevaReserva = new Reserva(req.body);
        const reservaGuardada = await nuevaReserva.save();
        res.status(201).json(reservaGuardada);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear la reserva", error });
    }
});

//Obtener todas las reservas
router.get("/reserva", async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las reservas", error });
    }
});

// Actualizar una reserva por ID
router.put("/reserva/:id", async (req, res) => {
    try {
        const reservaActualizada = await Reserva.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!reservaActualizada) {
            return res.status(404).json({ mensaje: "Reserva no encontrada" });
        }
        res.status(200).json(reservaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al actualizar la reserva", error });
    }
});

//Eliminar una reserva
router.delete("/reserva/:id", async (req, res) => {
    try {
        const reservaEliminada = await Reserva.findByIdAndDelete(req.params.id);
        if (!reservaEliminada) {
            return res.status(404).json({ mensaje: "Reserva no encontrada" });
        }
        res.status(200).json({ mensaje: "Reserva eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al eliminar la reserva", error });
    }
});

module.exports = router;
