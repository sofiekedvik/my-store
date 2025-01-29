"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/solid";
import ProductCard from "../product-card/product-card";
import { TProduct } from "../product-list/product-list";
import { useProducts } from "@/providers/products";

export default function ProductGrid({ noFilters }: { noFilters?: boolean }) {
  const searchParams = useSearchParams();
  const { products } = useProducts();
  const router = useRouter();
  const search = searchParams.get("category");
  const [productsGrid, setProductsGrid] = useState<Array<TProduct>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (products) {
      setProductsGrid(products);
      const productCategories = products.map((product) =>
        product.categories.map((category) => category)
      );
      setCategories([...new Set(productCategories.flat())]);
    }
  }, [products]);

  const filterProducts = (selected: string) =>
    products.filter((product) =>
      product.categories.find(
        (category: string) =>
          category.toLowerCase() ===
          selected?.split("-").join(" ").toLowerCase()
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
    setSelectedCategory("");
    router.replace(`/products`, { scroll: false });
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      const filteredProducts = filterProducts(selectedCategory);
      setProductsGrid(filteredProducts);
      setSelectedCategory(selectedCategory);
      router.replace(
        `/products?category=${selectedCategory.split(" ").join("-")}`,
        { scroll: false }
      );
    } else {
      unSelectCategory();
    }
  };

  return (
    <div>
      <div className="bg-white">
        {!noFilters && (
          <div className="flex gap-6 justify-between items-center py-6">
            <div className="flex gap-6 items-center">
              <h3 className="text-md tracking-tight text-gray-900">
                <span className="font-bold">Products:</span>{" "}
                <span>{productsGrid?.length || 0} </span>
              </h3>
              <div className="flex gap-3 items-center">
                <h3 className="text-md tracking-tight text-gray-900">
                  <span className="font-bold">Category:</span>{" "}
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
              </div>
            </div>
            <div>
              <h3 className="text-md tracking-tight text-gray-900">
                <span className="font-bold">Filters:</span>{" "}
              </h3>
              {!selectedCategory && <span className="text-sm">None</span>}
              {selectedCategory && (
                <button
                  className="flex bg-slate-200 rounded-md p-1 text-sm"
                  type="button"
                  onClick={unSelectCategory}
                >
                  {selectedCategory}{" "}
                  <span className="w-6 h-6 flex items-center justify-center pl-2 text-sm">
                    <XCircleIcon title="remove" />
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
        {productsGrid.length ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productsGrid.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
