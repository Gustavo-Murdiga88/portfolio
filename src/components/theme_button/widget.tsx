"use client";

import { Sun } from "lucide-react";

export function ThemeButton() {
  function handleChangeTheme() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }

  return (
    <button
      type="button"
      aria-label="theme-control"
      className="transition-all hover:brightness-150"
      onClick={handleChangeTheme}
    >
      <Sun className="text-neutral-600 dark:text-neutral-dark-600" />
    </button>
  );
}
