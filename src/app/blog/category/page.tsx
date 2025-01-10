import React from "react";
import Link from "next/link";

function Categories({ categories }) {
  return (
    <ul className="flex gap-6">
      {categories.map((category) => (
        <li key={category}>
          <Link href={`/blogg/category/${category.split("").join("-")}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Category() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  const getCategories = () => {
    const categories = posts.map((post) => post.category);
    return Array.from(new Set(categories));
  };

  const categories = getCategories();
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
