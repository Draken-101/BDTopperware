const { authJwt } = require("../middlewares");
const productoController = require("../controllers/producto.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/productos", [authJwt.verifyToken, authJwt.isAdmin], productoController.getTodosLosProductos);
  
    app.post("/productos", [authJwt.verifyToken, authJwt.isAdmin], productoController.crearProducto);

    app.delete("/productos", [authJwt.verifyToken, authJwt.isAdmin], productoController.eliminarProducto);

    
    app.put("/productos/:nombre", [authJwt.verifyToken, authJwt.isAdmin], productoController.modificarProducto);
  
  };

