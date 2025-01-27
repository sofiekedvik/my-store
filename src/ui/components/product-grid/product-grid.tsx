"use client";

import { useEffect, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  const filterProducts = (selectedCategory: string) =>
    products.filter((product) =>
      product.categories.find(
        (category: string) =>
          category.toLowerCase() ===
          selectedCategory?.split("-").join(" ").toLowerCase()
      )
    );

  function getAllCategorys() {
    const categoriesproducts = products.map((product) =>
      product.categories.map((category) => category)
    );
    setCategories([...new Set(categoriesproducts.flat())]);
  }

  useEffect(() => {
    if (products) {
      getAllCategorys();
    }
  }, [products]);

  useEffect(() => {
    if (search) {
      const filteredProducts = filterProducts(search);
      setProductsGrid(filteredProducts);
      setSelectedCategory(search);
    }
  }, [search]);

  const unSelectCategory = () => {
    setProductsGrid(products);
    setSelectedCategory("");
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      const filteredProducts = filterProducts(selectedCategory);
      setProductsGrid(filteredProducts);
      setSelectedCategory(selectedCategory);
    } else {
      setProductsGrid(products);
      setSelectedCategory("");
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div className="flex gap-6 items-center py-6">
          <h3 className="text-md tracking-tight text-gray-900">
            <span className="font-bold">Products:</span>{" "}
            <span>{productsGrid.length || 0} </span>
          </h3>
          <form>
            <select
              name="category"
              id="category"
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChangeCategory}
              value={selectedCategory}
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </form>
          {selectedCategory && (
            <div className="flex gap-3 items-center">
              <h3 className="text-md tracking-tight text-gray-900">
                <span className="font-bold">Category:</span>{" "}
              </h3>
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
            </div>
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
