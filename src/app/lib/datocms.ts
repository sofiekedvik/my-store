import { executeQuery } from "@datocms/cda-client";

export async function performRequest(query) {
  return executeQuery(query, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });
}
