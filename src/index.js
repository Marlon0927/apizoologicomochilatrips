const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3001;
const userRoutes = require("./routes/user");
const destinosRoutes = require("./routes/destinos");
const reservaRoutes = require("./routes/reserva");
//const authRoutes = require("./routes/authentication");
//agregar en const la rewserva con su redirect

const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON

//Gestión de las rutas usando el middleware
app.use("/api", userRoutes);
app.use("/api", destinosRoutes);
app.use("/api", reservaRoutes);
//app.use("/api", authRoutes);
app.use(express.json());

//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
