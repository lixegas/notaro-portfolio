"use client";

import {useThemeContext} from "@/contexts/theme";
import {LuMoon, LuSun} from "react-icons/lu";

export default function ThemeButton() {
  const {theme, toggleTheme} = useThemeContext();

  const ThemeIcon = theme === "dark" ? LuMoon : LuSun;

  return (
    <button 
      className="p-3 dark:hover:bg-white/30 hover:bg-neutral-950/10 rounded-md duration-200 cursor-pointer" 
      onClick={toggleTheme}
    >
      {
        <ThemeIcon className="w-5 h-5 dark:text-white text-black"/>
      }
    </button>
  );
}