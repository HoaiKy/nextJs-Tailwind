import clsx from "clsx";
import React from "react";

type Props = {
  label: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  htmlFor?: string;
};

const Button = (props: Props) => {
  return props.htmlFor ? (
    <label
      htmlFor={props.htmlFor}
      className={clsx(["btn"], {
        [`${props.className}`]: props.className,
        ["bg-gray-500 px-14 py-3 rounded-lg text-white border-none"]:
          !props.className,
      })}
    >
      {props.label}
    </label>
  ) : (
    <button
      className={clsx(["btn"], {
        [`${props.className}`]: props.className,
        ["bg-gray-500 px-14 py-3 rounded-lg text-white border-none"]:
          !props.className,
      })}
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
    >
      {props.label}
    </button>
  );
};

export default Button;
