import React from "react";
import { executeQuery } from "@datocms/cda-client";
import { performRequest } from "@/app/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query allBlogPosts {
    preamble
    publishingDate
    slug
    title
    content {
      value
    }
  }`;

export default async function Home() {
  const result = await executeQuery("{ allBlogPosts { title } }", {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });

  console.log(result);

  return (
    <div className="">
      <h1>Welcome to my store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        laboriosam ut soluta minima. Consectetur sequi eos assumenda odio
        dolores? Atque nam odit dicta sed eius, ad impedit nulla ratione maxime.
      </p>
    </div>
  );
}
