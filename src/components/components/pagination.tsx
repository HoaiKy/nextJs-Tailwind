"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  totalPages: number;
};

const Pagination = (props: Props) => {
  //region: define
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  //#endregion

  //region functions
  const arr = Array(Math.floor(props.totalPages)).fill(5);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  //#endregion
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="flex float-right">
          <li>
            <button
              disabled={page === 1 ? true : false}
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("page", `${page - 1}`)
                );
                setPage(page - 1);
              }}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white"
            >
              Previous
            </button>
          </li>
          {arr.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  router.push(
                    pathname + "?" + createQueryString("page", `${index + 1}`)
                  );
                  setPage(index + 1);
                }}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700  light:hover:bg-gray-700 light:hover:text-white "
              >
                <div
                  className={
                    page === index + 1 ? "text-red-700" : "text-gray-500"
                  }
                >
                  {index + 1}
                </div>
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("page", `${page + 1}`)
                );
                setPage(page + 1);
              }}
              disabled={page === arr.length ? true : false}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
