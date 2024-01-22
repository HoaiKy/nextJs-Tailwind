import { prisma } from "../../../../../lib/prisma";

export async function getServerSideProps() {
  const user = await prisma.user.findFirst({
    where: {
      email: "hoailt@test.com",
    },
  });

  return {
    props: {
      user,
    },
  };
}
