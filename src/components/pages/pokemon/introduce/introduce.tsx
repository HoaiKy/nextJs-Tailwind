import React from "react";
import backgroundImage from "./../../../../../public/images/Hero.jpg";
import { Button } from "@/components/components";
import { Header } from "@/components/layout/pokemon-layout";

const Introduce = () => {
  return (
    <div
      className="bg-contain bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <Header />
      <div className="w-[900px] px-40 py-60 flex flex-col gap-10">
        <p className="font-medium text-[50px]">
          Introduce Your Product Quickly & Effectively
        </p>
        <span className="text-[#6F7CB2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </span>
        <div className="flex gap-5">
          <Button
            label="Purchase UI Kit"
            className="rounded-none text-white bg-[#37447E] border-none w-[200px]"
          />
          <Button
            label="Learn More"
            className="rounded-none text-black bg-transparent border-2 hover:text-white w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
