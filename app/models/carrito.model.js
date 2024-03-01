const mongoose = require("mongoose");

const CarritoSchema = new mongoose.Schema({
    valorDeArticulo: {
        type: Number,
        required: true,
    },
    valorFinalCompra: {
        type: Number,
        required: true,
    },
    cantidadProductos: {
        type: Number,
        required: true,
    },
    descripcionProductos: {
        type: String,
        required: true,
    }
});

const Carrito = mongoose.model("Carrito", CarritoSchema);

module.exports = Carrito;