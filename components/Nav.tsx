import React from "react";
import Image from "next/image";

const Nav = () => {
  const loggedIn = false;

  return (
    <header className="w-full relative z-10">
      <nav className=" bg-gray-100 max-w-[1440px] flex justify-between p-3 px-8 items-center">
        <div className="flex justify-between gap-8 items-center">
          logo
          <Image
            className="ml-20 absolute object-contain"
            src="/search.svg"
            alt="search"
            width={28}
            height={28}
          />
          <input
            className=" text-left px-14 pr-28 pr p-1 w-full rounded-3xl border border-black "
            type="text"
            placeholder="Wpisz czego szukasz"
          />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <ul className="flex justify-between gap-8 mr-10">
            <li>Home</li>
            <li>Popular</li>
            <li>Category</li>
            <li>Bestseller</li>
            <li>Blog</li>
          </ul>

          {loggedIn ? (
            <>
              <Image
                src="/basket.svg"
                alt="basket-image"
                width={28}
                height={20}
                className="object-contain cursor-pointer"
              />
              <div className=" bg-violet-500 w-10 h-10 rounded-3xl cursor-pointer">
                user
              </div>
            </>
          ) : (
            <div className="flex justify-between gap-6 items-center">
              <div className="bg-black text-white p-2 px-8 rounded-sm cursor-pointer border-2">
                Sign Up
              </div>
              <div className="p-2 px-8 rounded-sm border-2 border-gray-600 cursor-pointer">
                Sign In
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
1;
export default Nav;
