const { Router } = require("express");
const curriculoController = require("./app/controller/CurriculoController");

const routes = Router();

routes.get("/api/curriculo", curriculoController.get);

module.exports = routes;
