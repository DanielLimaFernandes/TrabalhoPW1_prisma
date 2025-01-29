/*
  Warnings:

  - You are about to drop the column `petshopId` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `petshopCNPJ` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL DEFAULT false,
    "deadline_vaccination" DATETIME NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "petshopCNPJ" TEXT NOT NULL,
    CONSTRAINT "Pet_petshopCNPJ_fkey" FOREIGN KEY ("petshopCNPJ") REFERENCES "Petshop" ("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("create_at", "deadline_vaccination", "description", "id", "name", "type", "vaccinated") SELECT "create_at", "deadline_vaccination", "description", "id", "name", "type", "vaccinated" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
