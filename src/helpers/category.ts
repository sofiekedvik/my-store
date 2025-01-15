export function getCategoryUrl(category: string): string {
  return `/blog/category/${transformCategoryNameToSlug(category)}`;
}

export function transformCategoryNameToSlug(category: string): string {
  return category.split(" ").join("-").split("&").join("and");
}
