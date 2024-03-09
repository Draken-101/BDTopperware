
const db = require("../models");
const Producto = db.producto;

exports.getTodosLosProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            clave: req.body.clave,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            stylo: req.body.stylo,
            img: req.body.img,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            

        });
        Producto.create(nuevoProducto);
        res.status(201).json("El producto [ " + req.body.nombre + " ] se a guardado!!!");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.eliminarProducto = async (req, res) => {
    try {
        const result = await Producto.deleteOne({ nombre: req.body.nombre });

        if (result.deletedCount === 0) {
            res.status(404).json(`El producto [ ${req.body.nombre} ] no existe.`);
        } else {
            res.status(200).json(`El producto [ ${req.body.nombre} ] ha sido eliminado con éxito.`);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.modificarProducto = async (req, res) => {
    Producto.updateOne({ nombre: req.params.nombre }, { $set: req.body })
      .then(result => {
        if (result.modifiedCount > 0) {
          res.status(200).json(`El producto [ ${req.params.nombre} ] ha sido modificado con éxito.`);
        } else {
          res.status(404).json(`El producto [ ${req.params.nombre} ] no existe o no se han realizado cambios.`);
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  };
  