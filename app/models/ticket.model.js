const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  numeroserie: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  cliente: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;