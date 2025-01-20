"use client";
import { useState } from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function NavLinks() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      {!isLoggedin ? (
        <Link href="/login">Login</Link>
      ) : (
        <Link href="/settings">
          <UserCircleIcon title="user icon" className="w-7 h-7 inline mr-2" />
          My Pages
        </Link>
      )}
    </nav>
  );
}

export default NavLinks;
