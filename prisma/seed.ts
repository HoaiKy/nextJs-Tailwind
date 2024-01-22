import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "hoailt@test.com" },
    update: {},
    create: {
      email: "nguyenvana@test.com",
      name: "nguyenvana",
    },
  });
}

async function post() {
  await prisma.post.upsert({
    where: { id: "hoaihoai" },
    update: {},
    create: {
      id: "",
      title: "hoaihoai",
      content: "hoaihoai",
      published: true,
    },
  });
}
async function customer() {
  await prisma.post.upsert({
    where: { id: "12566" },
    update: {},
    create: {
      id: "",
      title: "Customer",
    },
  });
}

const test = async function test() {
  await prisma.test.upsert({
    where: { id: "12566" },
    update: {},
    create: {
      id: "",
      testName: "hoai",
    },
  });
};

post()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

customer()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

test()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
