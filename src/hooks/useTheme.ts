import { useState, useEffect } from "react";
import {
  getInitialTheme,
  setStoredTheme,
  getSystemTheme,
} from "../utils/theme";
import type { Theme } from "../types";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        const newTheme = getSystemTheme();
        setTheme(newTheme);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
