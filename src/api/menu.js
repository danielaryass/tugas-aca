// api/menu.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return await createMenu(req, res);
    case 'GET':
      return await getAllMenus(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const createMenu = async (req, res) => {
  try {
    const { nama, deskripsi, kategori, makananPelengkap } = req.body;
    const newMenu = await prisma.menu.create({
      data: {
        nama,
        deskripsi,
        kategori,
        makananPelengkap: {
          create: makananPelengkap,
        },
      },
    });
    return res.status(201).json(newMenu);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllMenus = async (req, res) => {
  try {
    const menus = await prisma.menu.findMany();
    return res.json(menus);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving menus' });
  }
};
