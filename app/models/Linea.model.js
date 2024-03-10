const mongoose = require("mongoose");

const LineaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipoProducto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto' 
  }
});

const Linea = mongoose.model("Linea", LineaSchema);
module.exports = Linea;