import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useRecoilValue } from "recoil";
import basketAtom from "../atoms/basket/atom";

function Header() {
  const session = false;
  const basketTotal = useRecoilValue(basketAtom).length;

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center space-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {basketTotal ? (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {basketTotal}
              </span>
            ) : null}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt="https://www.gravatar.com/avatar/0000000000000"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => console.log("user click")}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            onClick={() => console.log("sign out")}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
