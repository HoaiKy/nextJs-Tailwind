/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

type HeaderProps = {
  onLogOut(): Promise<void>;
};

export default function Header(props: HeaderProps) {
  //region: define
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  //#endregion

  //region functions
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value !== "") {
      router.push(
        pathname +
          "?" +
          createQueryString("search", `${event.currentTarget.value}`)
      );
    } else {
      router.push(pathname);
    }
  };
  return (
    /* eslint-disable @next/next/no-img-element */
    <div className=" navbar flex justify-end ">
      <div className="flex-end gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto dark:text-white"
            onChange={handleChangeSearch}
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            <li>
              <a className="justify-between text-white">
                Profile
                <span className="badge text-white">New</span>
              </a>
            </li>
            <li>
              <Link className="text-white" href={"/settings"}>
                Settings
              </Link>
            </li>
            <li>
              <form action={props.onLogOut}>
                <button className="text-white">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// export default Header;
