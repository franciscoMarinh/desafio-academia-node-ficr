require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const limiterApiRequest = require("./app/helpers/RateLimit");
const { errorMiddleware } = require("./app/helpers/ErrorHelper");
const mongoose = require('mongoose')

class AppController {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.database()
  }

  middlewares() {
    this.app.set("json spaces", 4); // DELETE AFTER
    this.app.set("trust proxy", 1);

    this.app.use(cors());
    this.app.use(limiterApiRequest);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
  }

  routes() {
    this.app.use(require("./routes"));
    this.app.all("*", (req, res, next) => {
      return res.status(404).json({ error: "Page notFound" });
    });
    this.app.use(errorMiddleware);
  }
  async database(){
    await mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/test',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
  }
}

module.exports = new AppController().app;
