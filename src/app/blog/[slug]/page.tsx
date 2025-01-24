import React, { Suspense } from "react";
import Link from "next/link";
import { getCategoryUrl } from "@/helpers/category";
import { getPost, getPosts, TPost } from "@/helpers/blog-posts";
import Image from "next/image";

export const revalidate = 3600; // invalidate every hour
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: TPost) => ({
    slug: String(post.slug),
  }));
}

type TPostParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: TPostParams) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: TPostParams) {
  const { slug } = await params;
  const post = await getPost(slug);

  const mapContent = (content) => {
    return content.value.document.children.map((node) => {
      if (node.type === "heading") {
        if (node.level === 2) {
          return <h2 key={node.children[0].value}>{node.children[0].value}</h2>;
        } else {
          return <h3 key={node.children[0].value}>{node.children[0].value}</h3>;
        }
      }
      if (node.type === "paragraph") {
        return <p key={node.children[0].value}>{node.children[0].value}</p>;
      }
      if (node.type === "image") {
        return (
          <Image
            src={node.url}
            width={node.width}
            height={node.height}
            alt={node.title || "blog post image"}
            key={node.url}
          />
        );
      }
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <article>
        <ul>
          <li>
            <Link href="/blog">Back to Blog</Link>
          </li>
          {post.category.map((cat) => (
            <li key={cat.id}>
              <Link href={`${getCategoryUrl(cat.name)}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
        <h1>{post.title}</h1>
        <Image
          src={post.coverImage.url}
          width={post.coverImage.width}
          height={post.coverImage.height}
          alt={post.coverImage?.title || "blog post cover image"}
          priority={true}
        />
        {post.preamble && <h2>{post.preamble}</h2>}
        <div className="flex gap-4 text-grey-500">
          <span>{post.author.name}</span>
          <span>Published: {post._publishedAt}</span>
        </div>
        {mapContent(post.content)}
      </article>
    </Suspense>
  );
}
