const mongoose = require("mongoose"); // importando el componente mongoose
const reservaSchema = mongoose.Schema({
    tipo_reserva: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: String,
        required: false
    },
    fecha_fin: {
        type: String,
        required: false
    },
    cant_personas: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Reserva', reservaSchema);