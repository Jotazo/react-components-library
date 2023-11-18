import React from "react";
import Switch from "react-switch";

import useTheme from "../../hooks/useTheme";

import { Themes } from "../../enums";

import { MoonIcon, SunIcon } from "../../assets/Icons";

const ClassicToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex gap-4 items-center max-h-8">
      <SunIcon theme={theme} />
      <Switch
        onChange={toggleTheme}
        onColor="#A729F5"
        offColor="#A729F5"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        uncheckedIcon={false}
        checkedIcon={false}
        checked={theme === Themes.DARK}
        height={20}
        width={35}
        handleDiameter={12}
      />
      <MoonIcon theme={theme} />
    </div>
  );
};

export default ClassicToggler;
