-- CreateTable
CREATE TABLE `media` (
    `id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `Review` INTEGER NOT NULL,
    `Year` INTEGER NOT NULL,
    `Actor1` VARCHAR(255) NOT NULL,
    `Actor2` VARCHAR(255) NOT NULL,
    `Actor3` VARCHAR(255) NOT NULL,
    `MediaType` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `media_Name_key`(`Name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
