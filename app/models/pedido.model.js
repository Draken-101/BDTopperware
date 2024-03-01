const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: String,
  clave: String,
  cantidad: Number,
  precio: Number,
  img: String,
  pedidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }]
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;