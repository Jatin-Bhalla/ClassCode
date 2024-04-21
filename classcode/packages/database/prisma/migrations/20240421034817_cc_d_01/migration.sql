-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "SAP" TEXT NOT NULL,
    "Enrollment" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_SAP_key" ON "User"("SAP");

-- CreateIndex
CREATE UNIQUE INDEX "User_Enrollment_key" ON "User"("Enrollment");
