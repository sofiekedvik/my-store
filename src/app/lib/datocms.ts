import { executeQuery } from "@datocms/cda-client";
import { cache } from "react";

const dedupedPerformRequest = cache(async (serializedArgs) => {
  return executeQuery(...JSON.parse(serializedArgs));
});

export function performRequest(query, options) {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
      },
    ])
  );
}
