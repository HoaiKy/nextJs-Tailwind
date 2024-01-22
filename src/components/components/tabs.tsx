"use client";
import React from "react";
import { TTabs } from "../types/utils";

type TabsProps = {
  tabsConfig: TTabs[];
  className?: string;
};

const Tabs = (props: TabsProps) => {
  const { tabsConfig, className } = props;
  const [openTab, setOpenTab] = React.useState("1");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabsConfig?.map((item, index) => (
              <li
                key={index}
                className={
                  className
                    ? className
                    : "-mb-px mr-2 last:mr-0 flex-auto text-center"
                }
              >
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === item.key
                      ? "text-white bg-red-600"
                      : "text-red-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(item.key);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative flex flex-col min-w-0  break-words bg-white w-full mb-6 shadow-lg rounded overflow-y-auto ">
            <div className="px-4 py-5 flex-auto min-h-32 max-h-64">
              {tabsConfig?.map(
                (item, index) =>
                  item.key === openTab && (
                    <div key={index}> {item.children}</div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
