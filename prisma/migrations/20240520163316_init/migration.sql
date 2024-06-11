/*
  Warnings:

  - You are about to alter the column `latitude` on the `Swindler` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.
  - You are about to alter the column `longitude` on the `Swindler` table. The data in that column could be lost. The data in that column will be cast from `String` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Swindler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Swindler" ("createdAt", "id", "imageUrl", "latitude", "longitude") SELECT "createdAt", "id", "imageUrl", "latitude", "longitude" FROM "Swindler";
DROP TABLE "Swindler";
ALTER TABLE "new_Swindler" RENAME TO "Swindler";
PRAGMA foreign_key_check("Swindler");
PRAGMA foreign_keys=ON;
