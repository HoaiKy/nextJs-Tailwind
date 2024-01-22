import React from "react";

type Props = {
  title: string;
  isRequired?: boolean;
};

const Label = (props: Props) => {
  return (
    <div>
      <label className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] flex font-semibold">
        {props.title}
        {props.isRequired && <div className="text-red-700">*</div>}
      </label>
    </div>
  );
};

export default Label;
