import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Themes } from "../../enums";

import useTheme from "../../hooks/useTheme";

import { MoonIcon, SunIcon } from "../../assets/Icons";

const IconToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        onClick={toggleTheme}
        className="cursor-pointer"
      >
        {theme === Themes.DARK ? (
          <SunIcon theme={theme} />
        ) : (
          <MoonIcon theme={theme} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IconToggler;
