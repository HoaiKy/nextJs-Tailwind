import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const user = await prisma.user.findFirst({
    where: {
      id: "clryb0y7d000010dhg3gvqvdn",
    },
  });

  return Response.json({ user });
}
