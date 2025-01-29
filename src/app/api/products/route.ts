import Products from "./products.json";

export async function GET() {
  return Response.json({ data: Products });
}
