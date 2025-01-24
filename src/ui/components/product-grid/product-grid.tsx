"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TProduct } from "../product-list/product-list";
import { useEffect, useState } from "react";

export default function ProductGrid({
  products,
}: {
  products: Array<TProduct>;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [productsGrid, setProductsGrid] = useState<Array<TProduct>>(products);

  const filterProducts = (category: string) =>
    products.filter((product) =>
      product.categories.find(
        (cat: string) =>
          cat.toLowerCase() === category?.split("-").join(" ").toLowerCase()
      )
    );

  useEffect(() => {
    if (search) {
      const filteredProducts = filterProducts(search);
      setProductsGrid(filteredProducts);
    }
  }, [search]);

  return (
    <div>
      <div className="bg-white">
        <h2 className="sr-only">Products</h2>
        {productsGrid.length ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productsGrid.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
