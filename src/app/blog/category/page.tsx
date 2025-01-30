import React from "react";
import Link from "next/link";
import { getPosts } from "@/helpers/blog-posts";
import { getAllCategorys, getCategoryUrl, TCategory } from "@/helpers/category";

function Categories({ categories }: { categories: TCategory[] }) {
  return (
    <ul className="flex gap-6">
      {categories.map((category: TCategory) => (
        <li key={category.id}>
          <Link href={getCategoryUrl(category.name)}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Category() {
  const posts = await getPosts();
  const categories = await getAllCategorys();

  return (
    <>
      <h1>Categories</h1>
      <Categories categories={categories} />
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
