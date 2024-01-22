import dynamic from "next/dynamic";
import { prisma } from "../../../lib/prisma";

const Home = dynamic(() => import("@/components/pages/dashboard/home/home"));

export default async function HomePage() {
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "hoailt",
  //     email: "a@gmail.com",
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "hoailt",
  //   },
  // });

  // const user = await prisma.user.findFirstOrThrow();
  // const user = await prisma.user.create({
  //   data: { email: "alice@prisma.io" },
  // });

  // const user = await prisma.user.update({
  //   where: { id: "clrri5qvo00001nnhjc3jdjw4" },
  //   data: { email: "alice11111111111@prisma.io" },
  // });

  // const user = await prisma.user.delete({
  //   where: { id: "clrri5qvo00001nnhjc3jdjw4" },
  // });

  return (
    <main className="flex  flex-col items-center justify-between">
      <title>Dashboard</title>
      <Home />
    </main>
  );
}
