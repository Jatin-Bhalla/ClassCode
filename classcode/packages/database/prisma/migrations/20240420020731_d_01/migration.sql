-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "SAP" TEXT NOT NULL,
    "Enrollment" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_SAP_key" ON "User"("SAP");

-- CreateIndex
CREATE UNIQUE INDEX "User_Enrollment_key" ON "User"("Enrollment");
