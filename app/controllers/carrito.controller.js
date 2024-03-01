const db = require("../models");
const Carrito = db.carrito;


exports.getTodosLosCarritos = async (req, res) => {
    try {
        const carritos = await Carrito.find();
        res.status(200).json(carritos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCarritoPorId = async (req, res) => {
    try {
        const carrito = await Carrito.findById(req.params.id);
        if (!carrito) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.crearCarrito = async (req, res) => {
    try {
        const nuevoCarrito = await Carrito.create(req.body);
        res.status(201).json({ message: "Carrito creado con éxito", carrito: nuevoCarrito });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.actualizarCarrito = async (req, res) => {
    try {
        const resultado = await Carrito.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!resultado) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }
        res.status(200).json({ message: "Carrito actualizado con éxito", carrito: resultado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.eliminarCarrito = async (req, res) => {
    try {
        const resultado = await Carrito.findByIdAndDelete(req.params.id);
        if (!resultado) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }
        res.status(200).json({ message: "Carrito eliminado con éxito", carrito: resultado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};