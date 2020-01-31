const { Router } = require("express");
const curriculoController = require("./app/controller/CurriculoController");
const { errorMiddleware } = require("./app/helpers/ErrorHelper");

const routes = Router();

routes.get("/api/curriculo", curriculoController.get);

routes.all("*", (req, res) => {
  return res.status(404).json({
    error: "Page notFound",
    availableRoutes: {
      methods: {
        GET: ["/api/curriculo"]
      }
    }
  });
});

routes.use(errorMiddleware);

module.exports = routes;
