"use client";

import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";

type Theme = "dark" | "light";

const THEME_DARK = "dark";


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

function ThemeContextProvider({children}: {children: ReactNode | ReactNode[]}){
  const [theme, m_SetTheme] = useState<Theme>("dark");

  const setTheme = useCallback((theme: Theme) => {
    m_SetTheme(theme);

    if(theme === "dark") {
      document.documentElement.classList.add(THEME_DARK);
      return;
    }
    document.documentElement.classList.remove(THEME_DARK);
  }, [m_SetTheme]);

  const handleThemeChange = useCallback((ev: MediaQueryListEvent) => {
    if(ev.matches) {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if(mediaQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, [setTheme, handleThemeChange]);

  const toggleTheme = useCallback(() => {
    if(theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
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