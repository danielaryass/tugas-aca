const express = require('express')
const app = express()
const port = 3000
const menuController = require("./menuController");

app.get('/', (req, res) => {
res.send('Hello World!')
})
app.post("/menus", menuController.createMenu);
// app.get("/menus", menuController.getAllMenus);
// app.get("/menus/:id", menuController.getMenuById);
// app.put("/menus/:id", menuController.updateMenu);
// app.delete("/menus/:id", menuController.deleteMenu);


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})