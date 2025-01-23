import { notFound } from "next/navigation";
import { executeQuery } from "@datocms/cda-client";

export type TPost = {
  id: string;
  title: string;
  slug: string;
  content: {
    value: {
      document: {
        children: Array<{ type: string; children: Array<{ text: string }> }>;
      };
    };
  };
  preamble?: string;
  category: Array<{ name: string; id: string }>;
  _publishedAt: string;
  author: {
    name: string;
    id: string;
  };
  coverImage: {
    url: string;
    width: number;
    height: number;
    title: string | null;
  };
};

type ErrorResponse = {
  error: string;
};

const QUERY_BLOGPOST = `query($slug: String) {
  blogPost(filter: {slug: {eq: $slug}}) {
    id
    preamble
    slug
    title
    _publishedAt
    author {
      name
      id
    }
    category {
      name
      id
    }
    content {
      value
    }
    coverImage {
      url
      width
      height
      title
    }
  }
}`;

const ALL_BLOGPOSTS_QUERY = `{
    allBlogPosts {
      id
      slug
      title
      category {
        name
        id
      }
    }
  }`;

type TPostResponse = { blogPost: TPost | null } | ErrorResponse;
export type TPostsResponse = { allBlogPosts: Array<TPost> } | ErrorResponse;

export async function getPost(slug: string) {
  const postData: TPostResponse = await executeQuery(QUERY_BLOGPOST, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
    variables: { slug },
  });

  const post: TPost = postData["blogPost"] || {
    error: "Not found",
  };

  if (!post || "error" in post) return notFound();
  return post;
}

export async function getPosts() {
  const postsData: TPostsResponse = await executeQuery(ALL_BLOGPOSTS_QUERY, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });

  const posts: Array<TPost> = postsData["allBlogPosts"] || {
    error: "Not found",
  };

  if (!posts || "error" in posts) return notFound();
  return posts;
}
