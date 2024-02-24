const { authJwt } = require("../middlewares");
const Controller = require("../controllers/emprendedora.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/emprendedoras", [authJwt.verifyToken, authJwt.isAdmin], Controller.getEmprendedoras);
  
    app.post("/emprendedoras", [authJwt.verifyToken, authJwt.isAdmin], Controller.crearEmprendedora);

    app.delete("/emprendedoras", [authJwt.verifyToken, authJwt.isAdmin], Controller.eliminarEmprendedora);

    
    app.put("/emprendedoras/:tipo/:id", [authJwt.verifyToken, authJwt.isAdmin], Controller.modificarEmprendedora);
  
  };

