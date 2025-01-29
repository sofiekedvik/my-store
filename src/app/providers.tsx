"use client";

import { ThemeProvider } from "@/providers/theme";
import { ProductsProvider } from "@/providers/products";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  );
}
