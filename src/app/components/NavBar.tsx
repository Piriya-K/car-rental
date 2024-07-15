import React from "react";
import Image from "next/image";
import { auth } from "../../../auth";

const NavBar = async () => {
  const session = await auth();
  return (
    <div className="flex items-center px-3 justify-between shadow-sm border-b-[1px] sm:px-5 ">
      <div>
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </div>
      <div className="hidden sm:flex sm:gap-5">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact Us
        </h2>
      </div>
      <button>
        <Image
          src={session?.user?.image}
          alt="user profile image"
          width={50}
          height={50}
          className="rounded-full"
        />
      </button>
    </div>
  );
};

export default NavBar;
