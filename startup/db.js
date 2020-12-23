const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  mongoose
    .connect(config.get("dbConnection"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info("Connected to MongoDB..."));
};
