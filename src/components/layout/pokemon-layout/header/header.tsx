import { Button } from "@/components/components";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-10 px-40">
      <div className="flex gap-10">
        <span className="text-[#929ECC] link link-hover">Home</span>
        <span className="text-[#929ECC] link link-hover">About</span>
        <span className="text-[#929ECC] link link-hover ">Contact</span>
      </div>
      <p className="font-bold text-[26px] font-sans text-37447E text-[#37447E]">
        Landing
      </p>
      <Button label={"Buy Now"} className="bg-[#111B47] text-white w-[200px]" />
    </div>
  );
};

export default Header;
