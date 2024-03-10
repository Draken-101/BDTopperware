const db = require("../models");
const Linea = db.linea;

exports.crearLinea = async (req, res) => {
    try {
        const nuevaLinea = new Linea({
            nombre: req.body.nombre,
            tipoProducto: req.body.tipoProducto, 
        });

        await Linea.create(nuevaLinea);
        res.status(201).json("La línea [" + req.body.nombre + "] se ha guardado correctamente.");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.obtenerTodasLasLineas = async (req, res) => {
    try {
        const lineas = await Linea.find();
        res.status(200).json(lineas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.eliminarLinea = async (req, res) => {
    try {
        const result = await Linea.deleteOne({ nombre: req.body.nombre });

        if (result.deletedCount === 0) {
            res.status(404).json(`La línea [${req.body.nombre}] no existe.`);
        } else {
            res.status(200).json(`La línea [${req.body.nombre}] ha sido eliminada con éxito.`);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

function Mod_Linea(filtro, datos, res) {
    Linea.updateOne(filtro, { $set: datos })
        .then(result => {
            if (result.modifiedCount > 0) {
                res.status(200).json(`La línea [${datos.nombre}] ha sido modificada con éxito.`);
            } else {
                res.status(404).json(`La línea [${datos.nombre}] no existe o no se han realizado cambios.`);
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
}