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
        required: true
    },
    fecha_fin: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reserva', reservaSchema);