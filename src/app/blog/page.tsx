import React from "react";
import Link from "next/link";
import { getCategoryUrl } from "@/helpers/category";
import { executeQuery } from "@datocms/cda-client";

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

const ALL_BLOGPOSTS_QUERY = `{
  allBlogPosts {
    id
    slug
    title
  }
}`;

const CATEGORIES_QUERY = `{
  allCategories {
    name
    id
  }
}`;

export default async function Posts() {
  const postsData = await executeQuery(ALL_BLOGPOSTS_QUERY, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });

  const categoriesData = await executeQuery(CATEGORIES_QUERY, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });

  const posts = postsData["allBlogPosts"] || [];
  const categories = categoriesData["allCategories"] || [];

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
