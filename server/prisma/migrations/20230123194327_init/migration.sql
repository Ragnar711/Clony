/*
  Warnings:

  - You are about to alter the column `Name` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `Actor1` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `Actor2` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `Actor3` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `MediaType` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(0))`.
  - You are about to alter the column `Actor4` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `Director` on the `media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `media` MODIFY `Name` VARCHAR(191) NOT NULL,
    MODIFY `Actor1` VARCHAR(191) NULL DEFAULT '',
    MODIFY `Actor2` VARCHAR(191) NULL DEFAULT '',
    MODIFY `Actor3` VARCHAR(191) NULL DEFAULT '',
    MODIFY `MediaType` ENUM('Movie', 'TVShow', 'Anime', 'Other') NOT NULL DEFAULT 'Other',
    MODIFY `Actor4` VARCHAR(191) NULL DEFAULT '',
    MODIFY `Director` VARCHAR(191) NULL DEFAULT '';

-- RenameIndex
ALTER TABLE `media` RENAME INDEX `media_Name_key` TO `Media_Name_key`;
