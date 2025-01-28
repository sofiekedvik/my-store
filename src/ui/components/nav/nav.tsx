"use client";
import { useState } from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";

function NavLinks() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [ItemsInCart, setItemsInCart] = useState(0);

  return (
    <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-between">
      <div>
        <Link href="/" className="text-red-300 font-bold text-2xl">
          MyStore
        </Link>
      </div>
      <ul className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        {!isLoggedin ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/settings">
            <UserCircleIcon title="user icon" className="w-6 h-6 inline mr-2" />
            My Pages
          </Link>
        )}
        <Link href="/favorites">
          <HeartIcon
            title="favorites heart icon"
            className="w-6 h-6 inline mr-2"
          />
        </Link>
        <Link href="/checkout" className="relative">
          <ShoppingBagIcon
            title="checkout cart icon"
            className="w-6 h-6 inline mr-2"
          />
          <span className="absolute top-0 right-0 bg-blue-400 w-4 h-4 text-xs text-white rounded-full flex items-center justify-center font-bold">
            {ItemsInCart}
          </span>
        </Link>
      </ul>
    </nav>
  );
}

export default NavLinks;
