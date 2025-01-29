"use client";

import React, { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light"); // default theme

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export const useTheme = () => useContext(ThemeContext);
