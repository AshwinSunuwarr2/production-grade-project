import React from "react";

function Button({
  children,
  type = "button",
  onClick,
  bgColor = "bg-red-500",
  textColor = "text-white",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
