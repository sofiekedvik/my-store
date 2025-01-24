import ProductList from "@/ui/components/product-list/product-list";
import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$30",
    color: "White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$37",
    color: "Gray",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Beige",
  },
  // More products...
];

export default async function Home() {
  return (
    <div className="">
      <h1>Welcome to my store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        laboriosam ut soluta minima. Consectetur sequi eos assumenda odio
        dolores? Atque nam odit dicta sed eius, ad impedit nulla ratione maxime.
      </p>
      <ProductList
        products={products}
        title="New this spring"
        slug="/products/new-this-spring"
      />
    </div>
  );
}
