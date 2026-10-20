import { useEffect, useState } from "react";

const STORAGE_KEY = "wayora-theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage === "undefined") return "light";
    return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")),
  };
}