const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   // Create a new Menu


   // Update Menu by ID
 W

   // Delete Menu by ID
 


// const menuController = require("./src/controllers/menuController");

app.get('/', (req, res) => {
res.send('Hello World!')
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})