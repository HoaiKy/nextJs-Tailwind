import clsx from "clsx";
import React from "react";
import Pagination from "./pagination";

export interface TableConfig {
  label: React.ReactNode;
  dataIndex: string;
  key: string | number;
  columnsClassName?: string;
  render?: (value: any, index: number) => React.ReactNode;
}

type Props = {
  dataSource: object[];
  tableConfig: TableConfig[];
  className?: string;
  headClassName?: string;
  rowsClassName?: string;
  pagination?: boolean;
  totalPages?: number;
};

const Table = (props: Props) => {
  const {
    dataSource,
    tableConfig,
    className,
    headClassName,
    rowsClassName,
    pagination,
    totalPages,
  } = props;
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table
        className={
          className
            ? className
            : "w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400 border-2 "
        }
      >
        <thead
          className={
            headClassName
              ? headClassName
              : "text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400"
          }
        >
          <tr>
            {tableConfig.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((item: any, index) => (
            <tr
              key={index}
              className={clsx(["hover:bg-gray-100  hover:cursor-pointer"], {
                ["bg-white border-b light:bg-gray-800 light:border-gray-700"]:
                  !rowsClassName,
                [rowsClassName ? rowsClassName : ""]: rowsClassName,
              })}
            >
              {tableConfig.map((itemA, indexA) => (
                <td
                  className={
                    itemA.columnsClassName
                      ? itemA.columnsClassName
                      : "px-6 py-4"
                  }
                  key={indexA}
                >
                  {itemA.render ? (
                    <itemA.render value={item[itemA.dataIndex]} />
                  ) : (
                    item[itemA.dataIndex]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && <Pagination totalPages={totalPages || 10} />}
    </div>
  );
};

export default Table;
