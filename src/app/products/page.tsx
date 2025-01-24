import React from "react";
import ProductGrid from "@/ui/components/product-grid/product-grid";
import { products } from "./products.constant";

export default function Products() {
  return (
    <div className="">
      <h1>Our products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        laboriosam ut soluta minima. Consectetur sequi eos assumenda odio
        dolores? Atque nam odit dicta sed eius, ad impedit nulla ratione maxime.
      </p>
      <ProductGrid products={products} />
    </div>
  );
}
