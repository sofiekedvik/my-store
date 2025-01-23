import React from "react";
import Link from "next/link";
import { transformCategoryNameToSlug } from "@/helpers/category";
import { notFound } from "next/navigation";

import { getPosts } from "@/helpers/blog-posts";

export default async function Category({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const posts = await getPosts();

  const categoryPosts = posts.filter((post) =>
    post.category.find(
      (item) => transformCategoryNameToSlug(item.name) === name
    )
  );

  if (categoryPosts.length === 0) {
    return notFound();
  }

  return (
    <>
      <Link href={`/blog`}>Back to Blog</Link>
      <h1>{name}</h1>
      <ul>
        {categoryPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
