"use client";

import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-[300px]">
      {favorites.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="p-2 text-center text-gray-300 font-bold text-xl">
            No favorites yet
          </p>
          <Link
            href="/products"
            className="p-2 border-blue-500 border rounded-md text-center"
          >
            Find products
          </Link>
        </div>
      )}
      {favorites.map((favorite) => (
        <div
          key={favorite}
          className="p-2 border-blue-500 border rounded-md flex-[1_0_150px] text-center"
        >
          {favorite}
        </div>
      ))}
    </div>
  );
}

export default Favorites;
