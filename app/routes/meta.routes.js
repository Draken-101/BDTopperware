const { authJwt } = require("../middlewares");
const Controller = require("../controllers/meta.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/metas", [authJwt.verifyToken, authJwt.isAdmin], Controller.getMetas);
  
    app.post("/metas", [authJwt.verifyToken, authJwt.isAdmin], Controller.crearMeta);

    app.delete("/metas", [authJwt.verifyToken, authJwt.isAdmin], Controller.eliminarMeta);

    
    app.put("/metas/:tipo/:id", [authJwt.verifyToken, authJwt.isAdmin], Controller.modificarMeta);
  
  };

