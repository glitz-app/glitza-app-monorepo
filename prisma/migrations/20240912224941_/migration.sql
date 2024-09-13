-- CreateEnum
CREATE TYPE "ImageProjectStatus" AS ENUM ('CREATED', 'IN_PROGRESS', 'COMPLETED', 'DELETED');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageProject" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATED',
    "name" TEXT,
    "firstModuleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModuleType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageProjectId" TEXT,
    "previousModuleId" TEXT,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleResult" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "prompt" JSONB NOT NULL,
    "moduleId" TEXT NOT NULL,
    "imageProjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModuleResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ImageProject_firstModuleId_key" ON "ImageProject"("firstModuleId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleType_name_key" ON "ModuleType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Module_previousModuleId_key" ON "Module"("previousModuleId");

-- CreateIndex
CREATE INDEX "Module_typeId_idx" ON "Module"("typeId");

-- CreateIndex
CREATE INDEX "Module_imageProjectId_idx" ON "Module"("imageProjectId");

-- CreateIndex
CREATE INDEX "ModuleResult_moduleId_idx" ON "ModuleResult"("moduleId");

-- CreateIndex
CREATE INDEX "ModuleResult_imageProjectId_idx" ON "ModuleResult"("imageProjectId");

-- AddForeignKey
ALTER TABLE "ImageProject" ADD CONSTRAINT "ImageProject_firstModuleId_fkey" FOREIGN KEY ("firstModuleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ModuleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_imageProjectId_fkey" FOREIGN KEY ("imageProjectId") REFERENCES "ImageProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_previousModuleId_fkey" FOREIGN KEY ("previousModuleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleResult" ADD CONSTRAINT "ModuleResult_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleResult" ADD CONSTRAINT "ModuleResult_imageProjectId_fkey" FOREIGN KEY ("imageProjectId") REFERENCES "ImageProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
