"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TProduct } from "../product-list/product-list";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function ProductGrid({
  products,
}: {
  products: Array<TProduct>;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  const [productsGrid, setProductsGrid] = useState<Array<TProduct>>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterProducts = (selectedCategory: string) =>
    products.filter((product) =>
      product.categories.find(
        (category: string) =>
          category.toLowerCase() ===
          selectedCategory?.split("-").join(" ").toLowerCase()
      )
    );

  useEffect(() => {
    if (search) {
      const filteredProducts = filterProducts(search);
      setProductsGrid(filteredProducts);
      setSelectedCategory(search);
    }
  }, [search]);

  const unSelectCategory = () => {
    setProductsGrid(products);
    setSelectedCategory(null);
  };

  return (
    <div>
      <div className="bg-white">
        <h2 className="sr-only">Products</h2>
        <div className="flex justify-between items-center py-6">
          {selectedCategory && (
            <button
              className="flex bg-slate-200 rounded-md p-2"
              type="button"
              onClick={unSelectCategory}
            >
              {selectedCategory}{" "}
              <span
                type="button"
                onClick={unSelectCategory}
                className="w-6 h-6 flex items-center justify-center pl-2"
              >
                <XCircleIcon title="remove" />
              </span>
            </button>
          )}
        </div>
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
