import React from "react";
import Link from "next/link";
import { getAllCategorys, getCategoryUrl } from "@/helpers/category";
import { getPosts, TPost } from "@/helpers/blog-posts";

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
      <div className="grid grid-cols-2 gap-4">
        <aside className="w-1/3">
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
        </aside>
        <div className="w-2/3">
          <h2>Latest</h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post: TPost) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post._publishedAt} className="text-gray-500">
                    {post._publishedAt}
                  </time>
                  <Link
                    href={"post.category.name"}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category[0].name}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.preamble}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  Author:
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {/* {post.author.name} */}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
