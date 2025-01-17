"use client";
import { useState } from "react";
import Link from "next/link";

function NavLinks() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const onToggleLogin = () => {
    setIsLoggedin(!isLoggedin);
  };

  return (
    <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      {!isLoggedin ? (
        <Link href="/login">Login</Link>
      ) : (
        <Link href="/settings">My Pages</Link>
      )}
      <button type="button" onClick={onToggleLogin}>
        {!isLoggedin ? "Login" : "Logout"}
      </button>
    </nav>
  );
}

export default NavLinks;
