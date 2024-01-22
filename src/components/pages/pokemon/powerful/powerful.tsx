import React from "react";
import backgroundImage from "./../../../../../public/images/powerful.jpg";
const Powerful = () => {
  return (
    <div
      className="bg-contain bg-no-repeat h-[500px]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-[700px] p-20 py-20 float-right">
        <p className="font-medium text-[36px] text-[#091133]">
          Light, Fast & Powerful
        </p>
        <span className="text-[#6F7CB2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </span>
      </div>
    </div>
  );
};

export default Powerful;
