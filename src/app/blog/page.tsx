import React from "react";
import Link from "next/link";
import { getAllCategorys, getCategoryUrl } from "@/helpers/category";
import { getPosts } from "@/helpers/blog-posts";

function Categories({ categories }) {
  return (
    <ul className="flex gap-6 flex-wrap mb-4">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={getCategoryUrl(category.name)}
            className="p-2 border-blue-500 border rounded-md flex-[1_0_150px] text-center"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Posts() {
  const posts = await getPosts();
  const categories = await getAllCategorys();

  return (
    <>
      <h1>Blog</h1>
      <h2>Categories</h2>
      <Categories categories={categories} />
      <h2>All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
