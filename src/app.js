// src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const menuController = require('./controllers/menuController');
const app = express();
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/",
  (req, res) => {
    res.send("Hello World!");
  }
)
app.post("/menus", menuController.createMenu);
app.get("/menus", menuController.getAllMenus);
app.get("/menus/:id", menuController.getMenuById);
app.put("/menus/:id", menuController.updateMenu);
app.delete("/menus/:id", menuController.deleteMenu);

module.exports = app;
