const { authJwt } = require("../middlewares");
const Controller = require("../controllers/ticket.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/tickets", [authJwt.verifyToken, authJwt.isAdmin], Controller.getTickets);
  
    app.post("/tickets", [authJwt.verifyToken, authJwt.isAdmin], Controller.crearTicket);

  };

