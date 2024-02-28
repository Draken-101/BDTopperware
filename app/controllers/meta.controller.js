
const db = require("../models");
const Meta = db.meta;

exports.getMetas = async (req, res) => {
    try {
        const metas = await Meta.find();
        res.status(200).json(metas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.crearMeta = async (req, res) => {

    try {
        const nuevaMeta = new Meta({
            clave: req.body.clave,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            venta_Necesaria: req.body.venta_Necesaria,
            img: req.body.img
        });
        Meta.create(nuevaMeta);
        res.status(201).json("La meta [ " + req.body.nombre + " ] se a guardado!!!");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.eliminarMeta = async (req, res) => {
    try {
        const result = await Meta.deleteOne({ nombre: req.body.nombre   });

        if (result.deletedCount === 0) {
            res.status(404).json(`La meta [ ${req.body.nombre} ] no existe.`);
        } else {
            res.status(200).json(`La meta [ ${req.body.nombre} ] ha sido eliminado con éxito.`);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.modificarMeta = async (req, res) => {
    try {
      let filtro = {};
      
      if (req.params.tipo === "clave") {
        filtro = { clave: req.params.id };
      } else {
        filtro = { nombre: req.params.id };
      }
  
      await Mod_Meta(filtro, req.body, res);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  function Mod_Meta(filtro, datos, res) {
    Meta.updateOne(filtro, { $set: datos })
      .then(result => {
        if (result.modifiedCount > 0) {
          res.status(200).json(`La meta [ ${datos.nombre} ] ha sido modificada con éxito.`);
        } else {
          res.status(404).json(`La meta [ ${datos.nombre} ] no existe o no se han realizado cambios.`);
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
  