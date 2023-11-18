import React from "react";

import AnimatedToggler from "./AnimatedToggler";
import ClassicToggler from "./ClassicToggler";

interface Props {
  variant?: "animated" | "default";
}

const ThemeToggler: React.FC<Props> = ({ variant = "default" }) => {
  if (variant === "animated") return <AnimatedToggler />;
  return <ClassicToggler />;
};

export default ThemeToggler;
