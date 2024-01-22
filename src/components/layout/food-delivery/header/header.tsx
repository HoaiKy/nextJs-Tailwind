import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/images/food-delivery/Logo.jpg";
import { Button } from "@/components/components";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Image src={Logo} width={200} height={200} alt="Picture of the author" />
      <div className="flex gap-2 items-center">
        <span className="font-bold text-[18px]">Deliver to:</span>
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.29688 18.3984C6.61328 18.8906 7.35156 18.8906 7.66797 18.3984C12.8008 11.0156 13.75 10.2422 13.75 7.5C13.75 3.77344 10.7266 0.75 7 0.75C3.23828 0.75 0.25 3.77344 0.25 7.5C0.25 10.2422 1.16406 11.0156 6.29688 18.3984ZM7 10.3125C5.41797 10.3125 4.1875 9.08203 4.1875 7.5C4.1875 5.95312 5.41797 4.6875 7 4.6875C8.54688 4.6875 9.8125 5.95312 9.8125 7.5C9.8125 9.08203 8.54688 10.3125 7 10.3125Z"
            fill="#FFB30E"
          />
        </svg>
        Current Location
        <span className="font-bold text-[18px]">
          Minh Hop, Quy Hop, Nghe An
        </span>
      </div>
      <div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7539 15.8242L14.2383 12.3086C14.0625 12.168 13.8516 12.0625 13.6406 12.0625H13.0781C14.0273 10.832 14.625 9.28516 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9 14.875 10.5469 14.3125 11.8125 13.3281V13.9258C11.8125 14.1367 11.8828 14.3477 12.0586 14.5234L15.5391 18.0039C15.8906 18.3555 16.418 18.3555 16.7344 18.0039L17.7188 17.0195C18.0703 16.7031 18.0703 16.1758 17.7539 15.8242ZM7.3125 12.0625C4.81641 12.0625 2.8125 10.0586 2.8125 7.5625C2.8125 5.10156 4.81641 3.0625 7.3125 3.0625C9.77344 3.0625 11.8125 5.10156 11.8125 7.5625C11.8125 10.0586 9.77344 12.0625 7.3125 12.0625Z"
                  fill="#FFB30E"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border-none bg-transparent  outline-0"
              placeholder="Search Food"
              required
            />
          </div>
        </form>
        <Button label="Login" />
      </div>
    </div>
  );
};

export default Header;
