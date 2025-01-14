import React from "react";
import Link from "next/link";
import { transformCategoryNameToSlug } from "@/helpers/category";

export default async function Category({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  const categoryPosts = posts.filter(
    (post) => name === transformCategoryNameToSlug(post.category)
  );

  return (
    <>
      <h1>{categoryPosts[0]?.category}</h1>
      <ul>
        {categoryPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
