const mongoose = require("mongoose"); // importando el componente mongoose
const reservaSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    nombre_usuario: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    precio: {
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