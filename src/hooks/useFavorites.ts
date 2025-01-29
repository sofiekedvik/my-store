import { useCallback, useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const isClient = typeof window === "object";

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const storageFavorites = localStorage.getItem("favorites");
    if (storageFavorites) {
      setFavorites(JSON.parse(storageFavorites));
    }
  }, []);

  const addFavorite = useCallback((id: number) => {
    setFavorites(() => [...favorites, id]);
  }, []);

  const removeFavorite = useCallback((id: number) => {
    setFavorites(() => favorites.filter((favorite: number) => favorite !== id));
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  const toogleFavorite = useCallback((id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
      return;
    }
    addFavorite(id);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, addFavorite, removeFavorite, isFavorite, toogleFavorite };
}
