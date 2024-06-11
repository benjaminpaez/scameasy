-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Swindler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "origin" TEXT,
    "plataform" TEXT,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Swindler" ("createdAt", "id", "imageUrl", "latitude", "longitude", "origin", "plataform") SELECT "createdAt", "id", "imageUrl", "latitude", "longitude", "origin", "plataform" FROM "Swindler";
DROP TABLE "Swindler";
ALTER TABLE "new_Swindler" RENAME TO "Swindler";
PRAGMA foreign_key_check("Swindler");
PRAGMA foreign_keys=ON;
