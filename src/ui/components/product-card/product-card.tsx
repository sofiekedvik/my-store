import React from "react";
import { TProduct } from "../product-list/product-list";

export default function ProductCard({
  product,
  handleToggleFavorites,
  renderHeartIcon,
}: {
  product: TProduct;
  handleToggleFavorites: (id: number) => void;
  renderHeartIcon: (id: number) => React.ReactNode;
}) {
  return (
    <div className="group">
      <a href={product.href}>
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
      </a>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <div className="flex justify-between items-center">
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price}
        </p>
        <button onClick={() => handleToggleFavorites(product.id)}>
          {renderHeartIcon(product.id)}
        </button>
      </div>
    </div>
  );
}
