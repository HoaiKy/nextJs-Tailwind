import { Footer } from "@/components/layout/pokemon-layout";
import {
  Fast,
  Introduce,
  Light,
  Powerful,
  Pricing,
  Purchase,
} from "@/components/pages/pokemon";
import React from "react";

const Pokemon = () => {
  return (
    <div className="">
      <Introduce />
      <Light />
      <Fast />
      <Powerful />
      <Purchase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Pokemon;
