
const mongoose = require("mongoose");

const MetaSchema = new mongoose.Schema({
  clave:{
    type:String,
    required:true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  venta_Necesaria: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Meta = mongoose.model("Meta", MetaSchema);

module.exports = Meta;