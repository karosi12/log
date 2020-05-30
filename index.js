"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/local");
const route = require("./router/index");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));
app.set("port", config.PORT);
app.use("/api", route);
app.all("/*", (req, res) => {
  res.status(404).send({ message: "404 - Not found" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Opps something went wrong" });
});

app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});

module.exports = app;
