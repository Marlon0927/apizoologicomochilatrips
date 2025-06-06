const mongoose = require("mongoose"); // importando el componente mogoose
const destinosSchema = mongoose.Schema({

    pais: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    fecha_inicio: {
        type: Date,
        required: false,
    },
    fecha_final: {
        type: Date,
        required: false,
    },
    precio: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
    duracion: {
        type: String,
        required: false,
    },
    imagen1: {
        type: String,
        required: false,
    },
    imagen2: {
        type: String,
        required: false,
    },
    imagen3: {
        type: String,
        required: false,
    },
    imagen4: {
        type: String,
        required: false,
    }
});
module.exports = mongoose.model("Destino", destinosSchema);