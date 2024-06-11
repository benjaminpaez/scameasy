/*
  Warnings:

  - Made the column `origin` on table `Swindler` required. This step will fail if there are existing NULL values in that column.
  - Made the column `plataform` on table `Swindler` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Swindler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "plataform" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Swindler" ("createdAt", "id", "imageUrl", "latitude", "longitude", "origin", "plataform") SELECT "createdAt", "id", "imageUrl", "latitude", "longitude", "origin", "plataform" FROM "Swindler";
DROP TABLE "Swindler";
ALTER TABLE "new_Swindler" RENAME TO "Swindler";
PRAGMA foreign_key_check("Swindler");
PRAGMA foreign_keys=ON;
