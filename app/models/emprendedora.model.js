const mongoose = require("mongoose");

const EmprendedoraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  numero_Cliente: {
    type: Number,
    required: true,
  },
  semanas: {
    uno: {
      nombre: {
        type: String,
        default: "Semana 1",
      },
      venta: {
        type: Number,
        required: true,
      },
    },
    dos: {
      nombre: {
        type: String,
        default: "Semana 2",
      },
      venta: {
        type: Number,
        required: true,
      },
    },
    tres: {
      nombre: {
        type: String,
        default: "Semana 3",
      },
      venta: {
        type: Number,
        required: true,
      },
    },
  },
  venta_Total: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    required: true,
  },
  role: [
    {
      type: String,
      default: ""
    }
  ]
});

const Emprendedora = mongoose.model("Emprendedora", EmprendedoraSchema);

module.exports = Emprendedora;
