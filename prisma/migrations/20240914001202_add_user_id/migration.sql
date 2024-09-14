/*
  Warnings:

  - Added the required column `userId` to the `ImageProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImageProject" ADD COLUMN     "userId" TEXT NOT NULL;
