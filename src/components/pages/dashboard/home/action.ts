"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function action() {
  revalidateTag("pokemons");
}

export async function getStaticProps() {
  const res = await fetch("https://shv3d.boomgames.vn/api/categories", {
    next: { tags: ["lethihoai"], revalidate: 30 },
  });
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export async function getServerSideProps() {
  const res = await cookies().get("role");
  const posts = res ? true : false;
  return {
    props: {
      posts,
    },
  };
}
