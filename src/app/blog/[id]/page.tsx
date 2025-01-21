import React, { Suspense } from "react";
import Link from "next/link";
import { getCategoryUrl } from "@/helpers/category";
import { getPost, TPost } from "@/helpers/blog-posts";

export const revalidate = 3600; // invalidate every hour
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog", {
    cache: "force-cache",
  }).then((res) => res.json());

  return posts.map((post: TPost) => ({
    id: String(post.id),
  }));
}

type TPostParams = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: TPostParams) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: TPostParams) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <article>
        <ul>
          <li>
            <Link href="/blog">Back to Blog</Link>
          </li>
          <li>
            <Link href={`${getCategoryUrl(post.category)}`}>
              {post.category}
            </Link>
          </li>
        </ul>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </Suspense>
  );
}
