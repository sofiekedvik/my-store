import { notFound } from "next/navigation";

export type TPost = {
  id: string;
  title: string;
  content: string;
  category: string;
};

type ErrorResponse = {
  error: string;
};

type TPostResponse = TPost | ErrorResponse;
export type TPostsResponse = TPost[] | ErrorResponse;

export async function getPost(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: "force-cache",
  });
  const post: TPostResponse = await res.json();

  if (!post || "error" in post) return notFound();
  return post;
}
