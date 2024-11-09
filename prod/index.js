require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');
const menusController = require('./menuController');
// Create a new express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER)

// Connect to the MySQL Database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.post('/menus', menusController.createMenu);

// Route to create a new user


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
