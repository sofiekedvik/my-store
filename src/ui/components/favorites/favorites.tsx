"use client";

import { useState } from "react";
import ProductGrid from "../product-grid/product-grid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <ProductGrid products={favorites} />
    </div>
  );
}

export default Favorites;
