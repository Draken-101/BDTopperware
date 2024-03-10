const mongoose = require("mongoose");

const CarritoSchema = new mongoose.Schema({
    cantidadProductos: {
        type: Number,
        required: true,
    },
   precioTotal: {
    type: Number,
    required: true
    },
    productos: {
        type: String,
        required: true
    }
    
});

const Carrito = mongoose.model("Carrito", CarritoSchema);

module.exports = Carrito;