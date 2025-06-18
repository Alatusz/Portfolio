import React from "react";

type ButtonCustomProps = {
  label: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  rounded?: string;
  shadow?: string;
  fullWidth?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
};

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  label,
  color = "",
  textColor = "",
  borderColor = "",
  rounded = "",
  shadow = "",
  fullWidth = false,
  hoverEffect = true,
  onClick,
}) => {
  const baseClass = [
    "px-4 py-2 transition duration-300",
    color,
    textColor,
    borderColor,
    rounded,
    shadow,
    fullWidth ? "w-full" : "",
    hoverEffect ? "hover:opacity-80 hover:scale-105" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
};

export default ButtonCustom;
