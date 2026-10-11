"use client";

import {useThemeContext} from "@/contexts/theme";
import {LuMoon, LuSun} from "react-icons/lu";

export default function ThemeButton() {
  const {theme, toggleTheme} = useThemeContext();

  const ThemeIcon = theme === "dark" ? LuMoon : LuSun;

  return (
    <button
      className="p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-neutral-900/5 duration-300 cursor-pointer"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
    >
      <ThemeIcon className="w-[18px] h-[18px]"/>
    </button>
  );
}
