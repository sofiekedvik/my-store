"use client";

import { TProduct } from "@/ui/components/product-list/product-list";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext<{ products: TProduct[] }>({
  products: [],
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Array<TProduct>>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch(() => ({ data: { message: "error getting products" } }));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the context
export const useProducts = () => useContext(ProductsContext);
