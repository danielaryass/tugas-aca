
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});


// Create a new Menu
const createMenu = async (req, res) => {
  console.log('Request Body:', req.body); // Log the request body
  const { nama, deskripsi, kategori, makananPelengkap } = req.body;

  try {
    const [rows] = await pool.query(
      'INSERT INTO Menu (nama, deskripsi, kategori) VALUES (?, ?, ?)',
      [nama, deskripsi, kategori]
    );

    const menuId = rows.insertId;

    // Insert the related MakananPelengkap
    if (makananPelengkap) {
      const makananPromises = makananPelengkap.map(item =>
        pool.query(
          'INSERT INTO MakananPelengkap (nama, deskripsi, menu_id) VALUES (?, ?, ?)',
          [item.nama, item.deskripsi, menuId]
        )
      );
      await Promise.all(makananPromises); // Await all promises
    }

    // Retrieve the created menu with associated food items
    const [menu] = await pool.query(
      'SELECT * FROM Menu WHERE id = ?',
      [menuId]
    );
    return res.status(201).json(menu[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Get all Menus
const getAllMenus = async (req, res) => {
  try {
    const [menus] = await pool.query('SELECT * FROM Menu');
    return res.json(menus);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error retrieving menus' });
  }
};

module.exports = {
  createMenu,
  getAllMenus,
};
