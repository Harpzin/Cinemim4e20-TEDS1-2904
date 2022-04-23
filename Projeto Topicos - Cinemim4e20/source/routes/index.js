const { Router } = require("express");
const routes = Router();

var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));
const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);
module.exports = routes;

const colaboradorRout = require("./UsuarioRout");
routes.use("/api", colaboradorRout);