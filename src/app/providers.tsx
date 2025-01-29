"use client";

import { ThemeProvider } from "@/providers/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
