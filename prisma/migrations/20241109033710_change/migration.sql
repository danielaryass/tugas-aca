/*
  Warnings:

  - You are about to drop the column `makanan_id` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `menu_id` to the `MakananPelengkap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Menu` DROP FOREIGN KEY `Menu_makanan_id_fkey`;

-- AlterTable
ALTER TABLE `MakananPelengkap` ADD COLUMN `menu_id` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `Menu` DROP COLUMN `makanan_id`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `MakananPelengkap` ADD CONSTRAINT `MakananPelengkap_menu_id_fkey` FOREIGN KEY (`menu_id`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
