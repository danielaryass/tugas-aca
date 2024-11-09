-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `makanan_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MakananPelengkap` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_makanan_id_fkey` FOREIGN KEY (`makanan_id`) REFERENCES `MakananPelengkap`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
