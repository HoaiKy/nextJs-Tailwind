/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/components/button";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ProductsProps = {
  setToast: Dispatch<
    SetStateAction<{
      open: boolean;
      content: string;
      status: string;
    }>
  >;
};

const Products = (props: ProductsProps) => {
  const arr = Array(12).fill(5);
  const onClick = () => {
    props.setToast({
      open: true,
      content: "success now",
      status: "warning",
    });
  };
  return (
    <div className="w-full ">
      <div className="diff aspect-[16/2]">
        <div className="diff-item-1">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
          />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
            className="blur-sm"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className="grid lg:grid-rows-3 md:grid-rows-4 sm:grid-rows-none grid-flow-col gap-2 py-24 w-full ">
        {arr.map((_, index) => (
          <div key={index}>
            <div className="flex justify-center">lethihoai</div>
          </div>
        ))}
      </div>
      <Button onClick={onClick} label={"Le Thi Hoai"} />
      <Link href={"/users"} title="Link">
        Link
      </Link>
    </div>
  );
};

export default Products;
