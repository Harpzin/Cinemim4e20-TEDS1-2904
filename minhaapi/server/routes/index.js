const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

const colaboradorRout = require("./ColaboradorRout");
routes.use("/api", colaboradorRout);

const solicitanteRout = require("./SolicitanteRout");
routes.use("/api", solicitanteRout);

const tiporequisicaoRout = require("./TipoRequisicaoRout");
routes.use("/api", tiporequisicaoRout);

const andamentoRout = require("./AndamentoRout");
routes.use("/api", andamentoRout);

const requisicaoRout = require("./RequisicaoRout");
routes.use("/api", requisicaoRout);

const atividadeRout = require("./AtividadeRout");
routes.use("/api", atividadeRout);

module.exports = routes;