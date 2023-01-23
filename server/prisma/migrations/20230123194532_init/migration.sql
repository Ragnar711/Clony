/*
  Warnings:

  - You are about to alter the column `MediaType` on the `media` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `media` MODIFY `Name` VARCHAR(255) NOT NULL,
    MODIFY `Actor1` VARCHAR(255) NULL,
    MODIFY `Actor2` VARCHAR(255) NULL,
    MODIFY `Actor3` VARCHAR(255) NULL,
    MODIFY `MediaType` VARCHAR(255) NULL DEFAULT 'Other',
    MODIFY `Actor4` VARCHAR(255) NULL,
    MODIFY `Director` VARCHAR(255) NULL;

-- RenameIndex
ALTER TABLE `media` RENAME INDEX `Media_Name_key` TO `media_Name_key`;
