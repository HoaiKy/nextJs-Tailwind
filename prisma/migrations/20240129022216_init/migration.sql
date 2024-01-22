-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "profile" TEXT,
    "contact" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" TEXT NOT NULL,
    "testName" TEXT NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "personid" INTEGER,
    "lastname" VARCHAR(255),
    "firstname" VARCHAR(255),
    "address" VARCHAR(255),
    "city" VARCHAR(255)
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "customer_customerName_key" ON "customer"("customerName");

-- CreateIndex
CREATE UNIQUE INDEX "test_testName_key" ON "test"("testName");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
