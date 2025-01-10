import React from "react";
import Link from "next/link";

export default async function Category({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <>
      <h1>{name}</h1>
      <ul>
        {posts
          .filter((post) => name === post.category)
          .map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
