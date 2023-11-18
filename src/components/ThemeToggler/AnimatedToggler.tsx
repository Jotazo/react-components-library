import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Themes } from "../../enums";

import { MoonIcon, SunIcon } from "../../assets/Icons";
import useTheme from "../../hooks/useTheme";

const AnimatedToggler = () => {
  const { theme, toggleTheme } = useTheme();

  const togglerText = theme === Themes.DARK ? "Light Mode" : "Dark Mode";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        onClick={toggleTheme}
        className="flex items-center gap-2 cursor-pointer"
      >
        {theme === Themes.DARK ? (
          <SunIcon theme={theme} />
        ) : (
          <MoonIcon theme={theme} />
        )}
        <span className="text-xs text-darkBlueLightText dark:text-white">
          {togglerText}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedToggler;
