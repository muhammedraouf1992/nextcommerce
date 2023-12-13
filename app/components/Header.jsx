import Link from "next/link";
import React from "react";
import { Bag, User, Wishlist } from "./icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="bg-white py-5">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              <span>
                <Link href="/" className="font-semibold text-xl tracking-tight">
                  WooNext
                </Link>
              </span>
            </div>

            <div
              className={`max-h-full overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm font-medium uppercase lg:flex-grow">
                <Link
                  href="/blog"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
                >
                  Blog
                </Link>
                <Link
                  href="/products"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
                >
                  products
                </Link>
              </div>
              <div className="text-sm font-medium">
                <Link
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <User className="mr-1 lg:mr-0" />
                    Profile
                  </span>
                </Link>
                <Link
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Wishlist className="mr-1 lg:mr-0" />
                    Wishlist
                  </span>
                </Link>
                <Link
                  href="/cart"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Bag className="mr-1 lg:mr-0" />
                    <span className="ml-1">Bag</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
