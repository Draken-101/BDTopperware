
const mongoose = require("mongoose");
const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  stylo:{
   type:String
  },
  clave: {
    type: String,
    required: true,
  },
  descripcion:{
      type: String,
      required: true,
  },
  categoria:{
     type: String,
     require:true,

  },
   tipo:[
    {
     type: Object
    }
   ],
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
// Agregar stylo, Categoria, Descripcion y Tipo