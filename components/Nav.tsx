"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownCategory from "./DropDownCategory";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const loggedIn = false;

  return (
    <header className="w-full relative z-10">
      <nav className=" bg-gray-100 flex justify-between p-3 px-8 items-center">
        <div className="flex justify-between gap-8 items-center">
          <Link href="/">logo</Link>
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
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Popular</li>
            <div>
              <li
                className="cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              >
                Category
              </li>
              {dropdown && <DropDownCategory />}
            </div>
            <li className="cursor-pointer">Bestseller</li>
            <li className="cursor-pointer">Blog</li>
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
              <Link href="/user/signUp">
                <div className="bg-black text-white p-2 px-8 rounded-sm cursor-pointer border-2">
                  Sign Up
                </div>
              </Link>

              <Link href="/user/signIn">
                <div className="p-2 px-8 rounded-sm border-2 border-gray-600 cursor-pointer">
                  Sign In
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
1;
export default Nav;
