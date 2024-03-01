const db = require("../models");
const Pedido = db.pedido;

// aca se obtiene el pedido 
exports.getTodosLosPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// por id o por nombre depende como queramos 
exports.getPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear un nuevo pedidoo 
exports.crearPedido = async (req, res) => {
    try {
        const nuevoPedido = await Pedido.create(req.body);
        res.status(201).json({ message: "Pedido creado con éxito", pedido: nuevoPedido });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un pedido por su ID o nombre depende como queramos 
exports.actualizarPedido = async (req, res) => {
    try {
        const resultado = await Pedido.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!resultado) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }
        res.status(200).json({ message: "Pedido actualizado con éxito", pedido: resultado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Elimina un pedido por ID o nombre depende de como queramos  
exports.eliminarPedido = async (req, res) => {
    try {
        const resultado = await Pedido.findByIdAndDelete(req.params.id);
        if (!resultado) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }
        res.status(200).json({ message: "Pedido eliminado con éxito", pedido: resultado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
