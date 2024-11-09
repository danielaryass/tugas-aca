   // src/controllers/menuController.js

   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   // Create a new Menu
   const createMenu = async (req, res) => {
     try {
       const { nama, deskripsi, kategori, makananpelengkap } = req.body;
       const newMenu = await prisma.menu.create({
         data: {
           nama,
           deskripsi,
           kategori,
         },
       });
       return res.status(201).json(newMenu);
     } catch (error) {
       return res.status(500).json({ error: 'Error creating menu' });
     }
   };

   // Get all Menus
   const getAllMenus = async (req, res) => {
     try {
       const menus = await prisma.menu.findMany();
       return res.json(menus);
     } catch (error) {
       return res.status(500).json({ error: 'Error retrieving menus' });
     }
   };

   // Get Menu by ID
   const getMenuById = async (req, res) => {
     const { id } = req.params;
     try {
       const menu = await prisma.menu.findUnique({
         where: { id: parseInt(id) },
         include: { makananpelengkap: true }, // Include related MakananPelengkap
       });
       if (!menu) {
         return res.status(404).json({ error: 'Menu not found' });
       }
       return res.json(menu);
     } catch (error) {
       return res.status(500).json({ error: 'Error retrieving menu' });
     }
   };

   // Update Menu by ID
   const updateMenu = async (req, res) => {
     const { id } = req.params;
     const { nama, deskripsi, kategori } = req.body;
     try {
       const updatedMenu = await prisma.menu.update({
         where: { id: parseInt(id) },
         data: { nama, deskripsi, kategori },
       });
       return res.json(updatedMenu);
     } catch (error) {
       return res.status(500).json({ error: 'Error updating menu' });
     }
   };

   // Delete Menu by ID
   const deleteMenu = async (req, res) => {
     const { id } = req.params;
     try {
       await prisma.menu.delete({
         where: { id: parseInt(id) },
       });
       return res.status(204).send(); // No Content
     } catch (error) {
       return res.status(500).json({ error: 'Error deleting menu' });
     }
   };

   module.exports = {
     createMenu,
     getAllMenus,
     getMenuById,
     updateMenu,
     deleteMenu,
   };
