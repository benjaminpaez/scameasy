/*
  Warnings:

  - Added the required column `origin` to the `Swindler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plataform` to the `Swindler` table without a default value. This is not possible if the table is not empty.

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
INSERT INTO "new_Swindler" ("createdAt", "id", "imageUrl", "latitude", "longitude") SELECT "createdAt", "id", "imageUrl", "latitude", "longitude" FROM "Swindler";
DROP TABLE "Swindler";
ALTER TABLE "new_Swindler" RENAME TO "Swindler";
PRAGMA foreign_key_check("Swindler");
PRAGMA foreign_keys=ON;
