import React from "react";
import backgroundImage from "./../../../../../public/images/Pricing.jpg";
import { Button } from "@/components/components";
const Pricing = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center text-center py-[250px] flex justify-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-[600px]">
        <p className="font-medium text-[36px] text-[#091133] m-2">
          A Price To Suit Everyone
        </p>
        <span className="text-[#6F7CB2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </span>

        <p className="font-medium text-[50px] text-[#222F65]  p-20">$40</p>
        <span className="text-[#37447E]">UI Design Kit</span>
        <div className="flex flex-col items-center gap-10">
          <span className="text-[14px] text-[#5D6970]">
            See, One price, Simple.
          </span>
          <Button
            label="Purchase Now"
            className="text-white w-[189px] bg-[#111B47]"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
