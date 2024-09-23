import React from "react";

const Button = ({
  text = "click me",
  onClick = () => {},
  children,
  type = "yellow",
  width,
  className = "",
}) => {
  return (
    <button
      className={`component-button ${className}`}
      onClick={onClick}
      style={{
        color: type === "yellow" ? "black" : "#495E57",
        backgroundColor: type === "yellow" ? "#F4CE14" : "#EDEFEE",
        width: width,
      }}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
