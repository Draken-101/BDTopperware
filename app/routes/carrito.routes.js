const { authJwt } = require("../middlewares");
const CarritoController = require("../controllers/carrito.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/carritos", [authJwt.verifyToken], CarritoController.getTodosLosCarritos);

    app.get("/carritos/:id", [authJwt.verifyToken], CarritoController.getCarritoPorId);

    app.post("/carritos", [authJwt.verifyToken], CarritoController.crearCarrito);

    app.put("/carritos/:id", [authJwt.verifyToken], CarritoController.actualizarCarrito);

    app.delete("/carritos/:id", [authJwt.verifyToken], CarritoController.eliminarCarrito);
};