const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const limiterApiRequest = require("./app/helpers/RateLimit");
const mongoose = require("mongoose");
require("dotenv").config();

class AppController {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    this.app.set("json spaces", 4);
    this.app.set("trust proxy", 1);
    this.app.use(cors());
    this.app.use(limiterApiRequest);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
  }

  routes() {
    this.app.use(require("./routes"));
  }
  async database() {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = new AppController().app;
