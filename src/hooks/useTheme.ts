import { useState } from "react";

import { Theme } from "../types";
import { Themes } from "../enums";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const $html = document.querySelector("html");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!$html.hasAttribute("class")) {
      $html.setAttribute("class", "");
      if (prefersDark) $html.classList.add(Themes.DARK);
      else $html.classList.remove(Themes.DARK);
    }

    return prefersDark ? Themes.DARK : Themes.LIGHT;
  });

  const toggleTheme = () => {
    const $html = document.querySelector("html");
    setTheme((prevTheme) => {
      const isDarkMode = prevTheme === Themes.DARK;
      if (isDarkMode) {
        $html?.classList.remove(Themes.DARK);
      } else {
        $html?.classList.add(Themes.DARK);
      }
      return isDarkMode ? Themes.LIGHT : Themes.DARK;
    });
  };

  return { theme, toggleTheme };
};

export default useTheme;
