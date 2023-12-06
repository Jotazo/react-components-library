import React from "react";

import AnimatedToggler from "./AnimatedToggler";
import ClassicToggler from "./ClassicToggler";
import IconToggler from "./IconToggler";

interface Props {
  variant?: "animated" | "default" | "icon";
}

const ThemeToggler: React.FC<Props> = ({ variant = "default" }) => {
  if (variant === "animated") return <AnimatedToggler />;
  if (variant === "icon") return <IconToggler />;
  return <ClassicToggler />;
};

export default ThemeToggler;
