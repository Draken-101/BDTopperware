const db = require("../models");
const Ticket = db.ticket;

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
