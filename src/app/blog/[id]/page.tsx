import React from "react";
import Link from "next/link";
import { getCategoryUrl } from "@/helpers/category";
import { getPost, TPost } from "@/helpers/blog-posts";

export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog", {
    cache: "force-cache",
  }).then((res) => res.json());

  return posts.map((post: TPost) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <article>
      <ul>
        <li>
          <Link href="/blog">Back to Blog</Link>
        </li>
        <li>
          <Link href={`${getCategoryUrl(post.category)}`}>{post.category}</Link>
        </li>
      </ul>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
