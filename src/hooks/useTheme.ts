import { useState } from "react";

import { Theme } from "../types";
import { Themes } from "../enums";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const $html = document.querySelector("html");
    const lastTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      !lastTheme ||
      (lastTheme !== Themes.DARK && lastTheme !== Themes.LIGHT)
    ) {
      prefersDark && $html.classList.add(Themes.DARK);
      localStorage.setItem(
        "lastTheme",
        prefersDark ? Themes.DARK : Themes.LIGHT
      );
      return prefersDark ? Themes.DARK : Themes.LIGHT;
    }

    return lastTheme as Theme;
  });

  const toggleTheme = () => {
    const $html = document.querySelector("html");
    setTheme((prevTheme) => {
      const isDarkMode = prevTheme === Themes.DARK;
      if (isDarkMode) {
        localStorage.setItem("lastTheme", Themes.LIGHT);
        $html?.classList.remove(Themes.DARK);
      } else {
        localStorage.setItem("lastTheme", Themes.DARK);
        $html?.classList.add(Themes.DARK);
      }
      return isDarkMode ? Themes.LIGHT : Themes.DARK;
    });
  };

  return { theme, toggleTheme };
};

export default useTheme;
