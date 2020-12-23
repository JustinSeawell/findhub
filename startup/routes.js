const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/v1/users", users);
  app.use("/api/v1/auth", auth);
  app.use(error);
};
