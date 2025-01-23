import { executeQuery } from "@datocms/cda-client";

export function getCategoryUrl(category: string): string {
  return `/blog/category/${transformCategoryNameToSlug(category)}`;
}

export function transformCategoryNameToSlug(category: string): string {
  return category.split(" ").join("-").split("&").join("and");
}

const CATEGORIES_QUERY = `{
  allCategories {
    name
    id
  }
}`;

export async function getAllCategorys() {
  const categoriesData = await executeQuery(CATEGORIES_QUERY, {
    token: process.env.NEXT_DATOCMS_API_TOKEN,
  });

  return categoriesData["allCategories"] || [];
}
