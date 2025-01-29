import React from "react";
import { TProduct } from "../product-list/product-list";
import { useFavorites } from "@/hooks/useFavorites";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function ProductCard({ product }: { product: TProduct }) {
  const { toogleFavorite, isFavorite } = useFavorites();

  const renderHeartIcon = (id: number) => {
    if (isFavorite(id)) {
      return <HeartIconSolid className="w-5 h-5 text-blue-500" />;
    }
    return <HeartIcon className="w-5 h-5 text-blue-500" />;
  };

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
        <button onClick={() => toogleFavorite(product.id)}>
          {renderHeartIcon(product.id)}
        </button>
      </div>
    </div>
  );
}
