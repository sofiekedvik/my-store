"use client";
import Link from "next/link";

function NavLinks() {
  return (
    <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-4 border-b border-t">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
export default NavLinks;
