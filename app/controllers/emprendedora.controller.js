
const db = require("../models");
const Emprendedora = db.emprendedora;

exports.getEmprendedoras = async (req, res) => {
  try {
    const Emprendedoras = await Emprendedora.find();
    res.status(200).json(Emprendedoras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.crearEmprendedora = async (req, res) => {
  const vT = req.body.semanas.uno.venta + req.body.semanas.dos.venta + req.body.semanas.tres.venta;
  try {
    const nuevaEmprendedora = new Emprendedora({
      nombre: req.body.nombre,
      numero_Cliente: req.body.numero_Cliente,
      ruta: req.body.ruta,
      tips: req.body.tips,
      venta_Total: vT,
      img: req.body.img
      
    });

    Emprendedora.create(nuevaEmprendedora);

    res.status(201).json("La emprendedora [ " + nuevaEmprendedora.nombre + " ] se ha guardado!!!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarEmprendedora = async (req, res) => {
  try {
    const result = await Emprendedora.deleteOne({ nombre: req.body.nombre });

    if (result.deletedCount === 0) {
      res.status(404).json(`La emprendedora [ ${req.body.nombre} ] no existe.`);
    } else {
      res.status(200).json(`La emprendedora [ ${req.body.nombre} ] ha sido eliminado con éxito.`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.modificarEmprendedora = async (req, res) => {

  const vT = req.body.semanas.uno.venta + req.body.semanas.dos.venta + req.body.semanas.tres.venta;
  const nuevaEmprendedora = {
    nombre: req.body.nombre,
    numero_Cliente: req.body.numero_Cliente,
    ruta: req.body.ruta,
    semanas: {
      uno: req.body.semanas.uno,
      dos: req.body.semanas.dos,
      tres: req.body.semanas.tres
    },
    venta_Total: vT,
    img: req.body.img
  };
  try {
    let filtro = {};
    let nombreActual= "";
    if (req.params.tipo === "numero_Cliente") {
      filtro = { numero_Cliente: req.params.id };
      nombreActual = Emprendedora.find({numero_Cliente:req.params.id}).nombre
    } else {
      filtro = { nombre: req.params.id };
      nombreActual = req.params.id;
    }

    await Mod_Emprendedora(filtro, nuevaEmprendedora, res , nombreActual);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

function Mod_Emprendedora(filtro, datos, res, nombreActual) {
  Emprendedora.updateOne(filtro, { $set: datos })
    .then(result => {
      if (result.modifiedCount > 0) {
        res.status(200).json(`La emprendedora [ ${nombreActual} ] ha sido modificada con éxito.`);
      } else {
        res.status(404).json(`La emprendedora [ ${nombreActual} ] no existe o no se han realizado cambios.`);
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
}
