"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = (theme === "system" ? systemTheme : theme) ?? "light";

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      {currentTheme === "dark" ? (
        <Sun
          className="size-7 text-neutral-500 transition-all ease-in-out hover:text-black dark:hover:text-white"
          strokeWidth="1"
        />
      ) : (
        <Moon
          className="size-7 text-neutral-500 transition-all ease-in-out hover:text-black dark:hover:text-white"
          strokeWidth="1"
        />
      )}
    </button>
  );
}
