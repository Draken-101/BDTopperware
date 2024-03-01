
const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  
});

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
