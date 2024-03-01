const { authJwt } = require("../middlewares");
const PedidoController = require("../controllers/pedido.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/pedidios", [authJwt.verifyToken, authJwt.isAdmin], Controller.getTodosLosPedidos );

  app.get("/pedidos/:id", [authJwt.verifyToken], PedidoController.getPedidoPorId);

  app.post("/pedidios", [authJwt.verifyToken, authJwt.isAdmin], Controller.crearPedido );

  app.put("/pedidos/:id", [authJwt.verifyToken], PedidoController.actualizarPedido);

  app.delete("/pedidios:id", [authJwt.verifyToken, authJwt.isAdmin], Controller.eliminarPedido );


};