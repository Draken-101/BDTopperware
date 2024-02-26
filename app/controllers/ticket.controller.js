// controllers/ticketController.js

const db = require("../models");
const Ticket = db.Ticket;

// Aca se obtienen los tickets 
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// aca se crea un nuevo ticket
exports.crearTicket = async (req, res) => {
  try {
    const nuevoTicket = new Ticket({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      estado: req.body.estado,
      numeroserie: req.body.numeroserie,
      fecha: req.body.fecha,
      hora: req.body.hora,
      cliente: req.bod.cliente,
      cantidad: req.body.cantidad,      
    });

    await nuevoTicket.save();

    res.status(201).json(nuevoTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualiza un ticket exsistente
exports.actualizarTicket = async (req, res) => {
  try {
    const ticketActualizado = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!ticketActualizado) {
      return res.status(404).json({ message: "Ticket no encontrado." });
    }

    res.status(200).json(ticketActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Elimina un ticket 
exports.eliminarTicket = async (req, res) => {
  try {
    const resultado = await Ticket.findByIdAndDelete(req.params.id);

    if (!resultado) {
      return res.status(404).json({ message: "Ticket no encontrado." });
    }

    res.status(200).json({ message: "Ticket eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
