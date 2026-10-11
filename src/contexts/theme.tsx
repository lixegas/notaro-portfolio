"use client";

import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {THEME_DARK, THEME_STORAGE_KEY} from "@/constants/theme";

type Theme = "dark" | "light";


interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if(!ctx){
    throw Error("Tried to use ThemeContext outside a ThemeContextProvider");
  }

  return ctx;
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
}

function ThemeContextProvider({children}: {children: ReactNode | ReactNode[]}){
  const [theme, m_SetTheme] = useState<Theme>("dark");

  const setTheme = useCallback((theme: Theme) => {
    m_SetTheme(theme);
    document.documentElement.classList.toggle(THEME_DARK, theme === "dark");
  }, [m_SetTheme]);

  const handleThemeChange = useCallback((ev: MediaQueryListEvent) => {
    // A theme picked with the toggle wins over the system one.
    if(readStoredTheme()) {
      return;
    }
    setTheme(ev.matches ? "dark" : "light");
  }, [setTheme]);

  useEffect(() => {
    // THEME_INIT_SCRIPT already applied the right class before the first paint: just sync the state with it.
    m_SetTheme(document.documentElement.classList.contains(THEME_DARK) ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, [handleThemeChange]);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Storage unavailable (e.g. blocked site data): the choice just won't persist.
    }
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export {useThemeContext, ThemeContextProvider}
