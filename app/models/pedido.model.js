const mongoose = require("mongoose");

const pedidosSchema = new mongoose.Schema({
  nombre: String,
  clave: String,
  cantidad: Number,
  precio: Number,
  img: String,
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }]
});

const pedidos = mongoose.model("Producto", productoSchema);

module.exports = Producto;