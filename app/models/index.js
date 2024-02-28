const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.socio = require("./user.model");
db.role = require("./Sociorole.model");
db.producto = require("./producto.model")
db.meta = require("./meta.model")
db.emprendedora = require("./emprendedora.model")
db.ticket = require("./ticket.model")


db.ROLES = ["socio", "admin", "moderator"];

module.exports = db;