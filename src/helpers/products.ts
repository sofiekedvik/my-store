export async function getProducts() {
  const products = await fetch("/api/products")
    .then((res) => res.json())
    .catch(() => ({ data: { message: "error getting products" } }));
  return products.data;
}
