export const THEME_DARK = "dark";
export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before the first paint, so the page never renders with the wrong theme.
// Kept outside the "use client" context module: a server component importing from there would get a client reference, not the string.
export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="${THEME_DARK}":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("${THEME_DARK}",d)}catch(e){}`;
