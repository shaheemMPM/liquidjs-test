const express = require("express");
const path = require("path");
const { Liquid } = require("liquidjs");
const engine = new Liquid();

const config = require("./data/data");

const app = express();

app.use(express.static("public"));

app.engine("liquid", engine.express());
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "liquid");

app.get("/", (req, res) => {
  res.render("invoice", { config });
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end("404 - page not found");
});

app.listen(5000, () => {
  console.log("Application started on port 5000");
});
