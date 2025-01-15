import React from "react";
import Link from "next/link";
import { getCategoryUrl } from "@/helpers/category";

function Categories({ categories }) {
  return (
    <ul className="flex gap-6 flex-wrap mb-4">
      {categories.map((category) => (
        <li
          key={category}
          className="p-2 border-blue-500 border rounded-md flex-[1_0_150px] text-center"
        >
          <Link href={getCategoryUrl(category)}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Posts() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  const getCategories = () => {
    const categories = posts.map((post) => post.category);
    return Array.from(new Set(categories));
  };

  const categories = getCategories();
  return (
    <>
      <h1>Blog</h1>
      <h2>Categories</h2>
      <Categories categories={categories} />
      <h2>All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
